import Ajv from 'ajv';
import readdir from 'recursive-readdir';
import { readFileSync } from 'fs';
import { basename } from 'path';
import $RefParser from 'json-schema-ref-parser';
const ROOT_SCHEMA = 'schemas/v1.schema.json';
const TEST_FILE = 'test-data/qabca-forms.json';

(async () => {
    const ajv = new Ajv();
    const refParser = new $RefParser();
    const schema = await refParser.dereference(ROOT_SCHEMA);

    const formTemplates = JSON.parse(readFileSync(TEST_FILE, 'utf8'));
    for (const template of formTemplates) {
        const definition = JSON.parse(template.definition);
        console.log(`Testing ${template.name} from ${basename(TEST_FILE)}`);
        await ajv.validate(schema, definition);
        if (ajv.errors) {
            throw new Error(ajv.errorsText(ajv.errors));
        }
    }
})()
    .catch((e) => {
        console.error(e.message);
        process.exit(1);
    });

