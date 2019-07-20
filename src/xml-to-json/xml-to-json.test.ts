import { convert } from "./xml-to-json";
import { DOMParser } from 'xmldom';

import qabcaJson from './test-data/qabca-json.json';
import qabcaXml from './test-data/qabca-xml.json';

const parser = new DOMParser();

describe('xml-to-json converter unit tests', () => {
	test('simple element', () => {
		const converted = convert('<template></template>', parser);
		expect(converted).toEqual({
			'@xmlElementName': 'template'
		});
	});
	test('attributes', () => {
		const converted = convert(`<template id="this is the id" template="this is the template"></template>`, parser);
		expect(converted).toEqual({
			'@xmlElementName': 'template',
			'@id': 'this is the id',
			'@template': 'this is the template',
		});
	});
	test('text content', () => {
		const converted = convert('<template>text content</template>', parser);
		expect(converted).toEqual({
			'@xmlElementName': 'template',
			'#text': 'text content'
		});
	});
	test('children', () => {
		const converted = convert(`
			<template>
				<childA></childA>
				<childB></childB>
			</template>
		`, parser);
		expect(converted).toEqual({
			'@xmlElementName': 'template',
			'template': [
				{ '@xmlElementName': 'childA' },
				{ '@xmlElementName': 'childB' }
			]
		});
	});
});

describe('xml to json "real data" tests', () => {

	interface FormTemplate {
		definition: string;
		name: string;
		id: string;
	};

	const jsonForms: { [id: string]: FormTemplate | undefined } = {};
	for (const form of qabcaJson) {
		jsonForms[form.id] = form;
	}

	for (const xmlForm of qabcaXml) {
		const jsonForm = jsonForms[xmlForm.id];
		if (jsonForm) {
			test(`Converts ${xmlForm.name} from XML to JSON`, () => {
				const convertedJson = convert(xmlForm.definition, parser);
				const wrappedConvertedJson = { template: [ convertedJson ]};
				const expectedJson = JSON.parse(jsonForm.definition);
				expect(wrappedConvertedJson).toEqual(expectedJson);
			});
		}
	}
});