import Ajv from "ajv";
import readdir from "recursive-readdir";
import { readFileSync } from "fs";
import { basename } from "path";
import $RefParser from "json-schema-ref-parser";
import { JSONSchema4, JSONSchema6 } from "json-schema";
const ROOT_SCHEMA = "schemas/root.schema.json";
const TEST_FILE = "test-data/qabca-forms.json";

describe("validator tests", async () => {
  let schema: JSONSchema4 | JSONSchema6;
  const ajv = new Ajv();
  const formTemplates = JSON.parse(readFileSync(TEST_FILE, "utf8"));

  beforeAll(async () => {
    const refParser = new $RefParser();
    schema = await refParser.dereference(ROOT_SCHEMA);
  });

  for (const template of formTemplates) {
    test(`validating ${template.name}`, async () => {
      const definition = JSON.parse(template.definition);
      console.log(`Testing ${template.name} from ${basename(TEST_FILE)}`);
      await ajv.validate(schema, definition);
      if (ajv.errors) {
        throw new Error(ajv.errorsText(ajv.errors));
      }
    });
  }
});
