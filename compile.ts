import { readSync, readFileSync, writeFileSync } from "fs";
import { dirname } from "path";
import mkdirp from 'mkdirp';
import * as json2Ts from 'json-schema-to-typescript';

const fs = require('fs');
const path = require('path');
const INPUT_FILE = 'schemas/v1.schema.json';
const SOURCE_FOLDER = 'schemas';
const TARGET_FOLDER = 'build'
const _ = require('lodash');

(async () => {

    const filesToParse = [ INPUT_FILE ];
    const parsedFiles = new Set<string>();

    while(filesToParse.length > 0) {
        const file = filesToParse.pop()!;
        const {dependencies} = await compile(file);
        parsedFiles.add(file);
        for (const dependency of dependencies) {
            if (!parsedFiles.has(dependency.fileName)) {
                filesToParse.push(dependency.fileName);
            }
        }
    }
})()
    .catch((e) => {
        console.error(e.message);
        process.exit(1);
    });

interface ICompileResult {
    dependencies: IDependency[];
}

async function compile(file: string): Promise<ICompileResult> {

    console.log(`Compiling ${file}`);

    const jsonSchema = JSON.parse(readFileSync(file, 'utf8'));
    const dependencies = findRefs(jsonSchema, dirname(file));
    const outFile = inFileToOutFile(file);
    const bannerComment = generateTypescriptImports(dependencies, file);
    const typescriptSource = await json2Ts.compileFromFile(file, {
        unreachableDefinitions: true,
        bannerComment
    });
    await new Promise((resolve, reject) => {
        mkdirp(dirname(outFile), (err, made) => {
            err ? reject(err) : resolve();
        });
    });
    writeFileSync(outFile, typescriptSource);
    console.log('compiled ' + file);

    return {
        dependencies
    };
}

function inFileToOutFile(inFile: string) {
    return inFile.replace('.schema.json', '.ts').replace(SOURCE_FOLDER, TARGET_FOLDER);
}

interface IDependency {
    fileName: string;
    interfaces: string[];
}

function generateTypescriptImports(dependencies: IDependency[], filePath: string) {
    return dependencies.map(dep => {
        const fileName = dep.fileName.replace('.schema.json', '');
        const typescriptPath = './' + path.relative(dirname(filePath), fileName).replace('\\', '/');
        return `import {${dep.interfaces}} from '${typescriptPath}'`;
    }).join('\n');
}

function findRefs(jsonSchema: any, basePath: string) {
    let result: IDependency[] = [];
    for (const key in jsonSchema) {
        const value = jsonSchema[key];
        if (key === '$ref') {
            const relativeFileName = value.split('#')[0];
            if (value.split[1]) {
                throw new Error('Does not support non-top level dependencies: ' + value);
            }
            if (relativeFileName) {
                const fileName = basePath + '/' + relativeFileName;
                const interfaceName = _.startCase(_.last(fileName.split('/')).split('.')[0]).replace(/ /g, '');
                result.push({
                    fileName,
                    interfaces: [
                        interfaceName
                    ]
                })
            }
        } else if (typeof value === 'object') {
            result = [...result, ...findRefs(value, basePath)];
        }
    }
    return result;
}