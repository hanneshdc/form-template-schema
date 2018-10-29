import { readdirSync, readFileSync, writeFileSync } from "fs";
import { type } from "os";

processDirectory('schemas');

function processDirectory(path: string) {
    const files = readdirSync(path, { withFileTypes: true });
    for (const file of files) {
        const fullPath = path + '/' + file.name;
        if (file.isDirectory()) {
            processDirectory(fullPath);
        } else {
            console.log('processing file')
            processFile(fullPath);
        }
    }
}

function processFile(file: string) {
    const jsonSchema = JSON.parse(readFileSync(file, 'utf8'));
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
    if (jsonSchema.type === 'object' && jsonSchema.properties) {
        jsonSchema.required = Object.keys(jsonSchema.properties);
        jsonSchema.additionalProperties = false;
    }
}