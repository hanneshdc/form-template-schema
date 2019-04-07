import Ajv from 'ajv';
import readdir from 'recursive-readdir';
import { readFileSync } from 'fs';
import { basename } from 'path';
import _ from 'lodash';
import betterAjvErrors, { IBetterAjvErrors, IOutputError } from 'better-ajv-errors';
import colors from 'colors';
import ajvErrors from 'ajv-errors';

const SCHEMA = 'build/bundle.schema.json';
const TEST_FILE = 'test-data/qabca-forms.json';

(async () => {
    const ajv = new Ajv({ jsonPointers: true, verbose: true });
    // ajvErrors(ajv);
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
                const title = error.parentSchema && (error.parentSchema as any).title as string | undefined;
                const printableTitle = title || 'title-less schema';
                if (printableTitle) {
                    console.log(colors.red(`While validating against ${printableTitle}`));
                }
                let startLine = betterError.start.line;
                let endLine = betterError.end ? betterError.end.line : betterError.start.line;
                console.log(`Line ${startLine} to ${endLine}`);
                if ((endLine - startLine) >= 35) {
                    continue;
                }

                const CONTEXT = 5;
                console.log(dataText.slice(startLine - CONTEXT, startLine - 1).join('\n'));
                console.log(colors.yellow(dataText.slice(startLine - 1, endLine).join('\n')));
                console.log(dataText.slice(endLine, endLine + CONTEXT).join('\n'));
            }
                
            throw new Error('AJV error, see logs for more details');
        }
    }
})()
    .catch((e) => {
        console.error(e && e.stack || e);
        process.exit(1);
    });

