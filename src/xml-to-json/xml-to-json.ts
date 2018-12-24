export type FormTemplateJSON = any;

export function convert(xmlString: string, parser: DOMParser): FormTemplateJSON {
	const xml = parser.parseFromString(xmlString, 'text/xml');
	const firstElement = firstElementChild(xml);
	if (!firstElement) {
		throw new Error('XML has no content');
	}
	return parseElement(firstElement);
}

function parseElement(element: Element): any {
	return {
		'@xmlElementName': element.nodeName,
		...parseAttributes(element),
		...parseChildren(element),
		...parseText(element)
	};
}

function parseChildren(element: Element): any {
	const result: any[] = [];
	let child: Node | null = element.firstChild;
	while (child) {
		if (isElement(child)) {
			const parsedElement = parseElement(child);
			result.push(parsedElement);
		}
		child = child.nextSibling;
	}
	if (result.length > 0) {
		return { [element.nodeName]: result };
	} else {
		return {};
	}
}

function parseAttributes(element: Element): any {
	const result: any = {};
	for (let i = 0; i < element.attributes.length; i++) {
		const attribute = element.attributes.item(i);
		if (attribute) {
			result['@' + attribute.name] = attribute.value;
		}
	}
	return result;
}

function parseText(element: Element): any {
	let firstChild = element.firstChild;
	if (!firstChild || element.childNodes.length !== 1 || !isText(firstChild)) {
		return {};
	}
	return { '#text': firstChild.nodeValue };
}

function isElement(node: Node): node is Element {
	return node.nodeType === node.ELEMENT_NODE;
}

function isText(node: Node): node is Text {
	return node.nodeType === node.TEXT_NODE;
}
function firstElementChild(node: Node): Element | undefined {
	let child: Node | null = node.firstChild;
	while (child) {
		if (isElement(child)) {
			return child;
		}
		child = child.nextSibling;
	}
	return undefined;
}