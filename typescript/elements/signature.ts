export interface Signature {
  "@xmlElementName": "signature";
  "@name": string;
  "@id": string;
  "@required": "true" | "false";
  "@parentId"?: string;
  "@events"?: string;
  "@validations"?: string;
  "@actions"?: string;
  "@clearBeforeEdit"?: "true";
}
