export interface Qrcode {
  "@xmlElementName": "qrcode";
  "@name": string;
  "@id": string;
  "@required": "true" | "false";
  "@parentId"?: string;
  "@verificationValue": string;
  "@validations"?: string;
}
