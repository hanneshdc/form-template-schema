import { readdirSync, readFileSync, writeFileSync } from "fs";
import { type } from "os";
import { basename } from "path";
import _ from "lodash";

processDirectory('schemas');

function processDirectory(path: string) {
    const files = readdirSync(path, { withFileTypes: true });
    for (const file of files) {
        const fullPath = path + '/' + file.name;
        if (file.isDirectory()) {
            processDirectory(fullPath);
        } else {
            processFile(fullPath);
        }
    }
}

function processFile(file: string) {
    console.log('processing ' + file)
    const jsonSchema = JSON.parse(readFileSync(file, 'utf8'));
    jsonSchema.title = _.camelCase(basename(file).split('.')[0]);
    jsonSchema.$id = file;
    processSchema(jsonSchema);
    writeFileSync(file, JSON.stringify(jsonSchema, null, '\t'))
}

function processSchema(jsonSchema: any): void {
    if (typeof jsonSchema !== 'object') {
        return;
    }
    for (const key in jsonSchema) {
        processSchema(jsonSchema[key]);
    }
    if (jsonSchema.properties) {
        // jsonSchema.required = Object.keys(jsonSchema.properties);
        jsonSchema.additionalProperties = false;
    }
}