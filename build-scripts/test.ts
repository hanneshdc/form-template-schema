import Ajv from 'ajv';
import readdir from 'recursive-readdir';
import { readFileSync } from 'fs';
import { basename } from 'path';
import _ from 'lodash';
import betterAjvErrors, { IBetterAjvErrors, IOutputError } from 'better-ajv-errors';
import colors from 'colors';

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
            const dataText = JSON.stringify(data, null, 2).split('\n');
            for (const error of ajv.errors) {
                const betterErrors = betterAjvErrors(schema, data, [ error ], { indent: 2, format: "js" });
                if (!betterErrors) {
                    continue;
                }
                const betterError = betterErrors[0];
                console.log(colors.red(betterError.error));
                if (!betterError.end) {
                    continue;
                }
                console.log(`Line ${betterError.start.line} to ${betterError.end.line}`);
                if ((betterError.end.line - betterError.start.line) >= 10) {
                    continue;
                }

                const CONTEXT = 2;
                console.log(dataText.slice(betterError.start.line - CONTEXT, betterError.start.line - 1).join('\n'));
                console.log(colors.yellow(dataText.slice(betterError.start.line - 1, betterError.end.line).join('\n')));
                console.log(dataText.slice(betterError.end.line, betterError.end.line + CONTEXT).join('\n'));
                
            }
                
            throw new Error('AJV error, see logs for more details');
        }
    }
})()
    .catch((e) => {
        console.error(e && e.stack || e);
        process.exit(1);
    });

