import Ajv from 'ajv';
import readdir from 'recursive-readdir';
import { readFileSync } from 'fs';
import { basename } from 'path';
import _ from 'lodash';
import betterAjvErrors from 'better-ajv-errors';

const SCHEMA = 'build/bundle.schema.json';
const TEST_FILE = 'test-data/qabca-forms.json';

(async () => {
    const ajv = new Ajv({ jsonPointers: true });
    const schema = JSON.parse(readFileSync(SCHEMA, 'utf8'));

    const formTemplates = JSON.parse(readFileSync(TEST_FILE, 'utf8'));
    for (const template of formTemplates) {
        const data = JSON.parse(template.definition);
        console.log(`Testing ${template.name} from ${basename(TEST_FILE)}`);
        await ajv.validate(schema, data);
        if (ajv.errors) {
            for (const error of ajv.errors) {
                const output = betterAjvErrors(schema, data, [error]);
                console.log(output);
            }
                
            throw new Error('AJV error, see logs for more details');
        }
    }
})()
    .catch((e) => {
        console.error(e && e.stack || e);
        process.exit(1);
    });

