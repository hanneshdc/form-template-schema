import $RefParser from 'json-schema-ref-parser';
import fs from 'fs';

const TARGET_FOLDER = 'build';
const ROOT_SCHEMA = 'schemas/root.schema.json';

(async () => {
    const refParser = new $RefParser();
    const schemaBundle = await refParser.bundle(ROOT_SCHEMA);
    fs.writeFileSync(TARGET_FOLDER + '/bundle.schema.json', JSON.stringify(schemaBundle));
})()
    .catch((e) => {
        console.error(e.message);
        process.exit(1);
    });
