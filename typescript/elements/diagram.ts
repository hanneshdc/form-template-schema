export interface Diagram {
  "@xmlElementName": "diagram";
  "@name": string;
  "@id": string;
  "@required": "true" | "false";
  "@parentId"?: string;
  "@validations"?: string;
  "@events"?: string;
  "@targetElementId": string;
  "@attachment": string;
  "@actions"?: string;
}
