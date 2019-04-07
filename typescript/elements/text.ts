export interface Text {
  "@xmlElementName": "text";
  "@name": string;
  "@id": string;
  "@required": "true" | "false";
  "@parentId"?: string;
  "#text": string;
  "@actions"?: string;
}
