export interface Location {
  "@xmlElementName": "location";
  "@name": string;
  "@id": string;
  "@required": "true" | "false";
  "@parentId"?: string;
  "@events"?: string;
  "@validations"?: string;
  "@actions"?: string;
}
