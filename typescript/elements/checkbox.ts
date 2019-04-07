export interface Checkbox {
  "@xmlElementName": "checkbox";
  "@name": string;
  "@id": string;
  "@required": "true" | "false";
  "@parentId"?: string;
  "@events"?: string;
  "@validations"?: string;
  "@actions"?: string;
}
