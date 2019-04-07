export interface Image {
  "@xmlElementName": "image";
  "@name": string;
  "@id": string;
  "@required": "true" | "false";
  "@validations"?: string;
  "@parentId"?: string;
  "@events"?: string;
  "@clearBeforeEdit"?: "true";
  "@actions"?: string;
}
