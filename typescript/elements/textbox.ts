export interface Textbox {
  "@xmlElementName": "textbox";
  "@name": string;
  "@id": string;
  "@required": "true" | "false";
  "@maxCharacters": string;
  "#text"?: string;
  "@dsQueryRule"?: string;
  "@parentId"?: string;
  "@concealed"?: "true";
  "@events"?: string;
  "@validations"?: string;
  "@actions"?: string;
}
