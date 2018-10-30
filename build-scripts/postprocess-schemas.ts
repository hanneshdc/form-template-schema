import { readFileSync, writeFileSync } from "fs";
import { basename } from "path";
import _ from "lodash";
import readdir from 'recursive-readdir';

const FOLDER = 'schemas';

(async () => {
    const files = await readdir(FOLDER);
    for (const file of files) {
        processFile(file);
    }
})()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    });

function processFile(file: string) {
    console.log('processing ' + file)
    const jsonSchema = JSON.parse(readFileSync(file, 'utf8'));
    jsonSchema.title = _.camelCase(basename(file).split('.')[0]);
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