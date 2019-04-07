export interface DvirControl {
  "@xmlElementName": "dvirControl";
  "@name": string;
  "@id": string;
  "@required": "true" | "false";
  "@parentId"?: string;
  "#text"?: "passed" | "failed" | "n/a";
  "@events"?: string;
  "@validations"?: string;
  "@actions"?: string;
}
