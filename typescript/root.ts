import {V1} from "./v1";
import {V234} from "./v234";

export type Root = V1 | V234;
export type AnyElement =
  | Text
  | Textbox
  | Dropdown
  | Radio
  | Checkbox
  | DvirControl
  | DvirSummary
  | Signature
  | Location
  | Qrcode
  | Image
  | Diagram
  | Section;

export interface V1 {
  template: [V1Template];
}
/**
 * This interface was referenced by `V1`'s JSON-Schema
 * via the `definition` "template".
 */
export interface V1Template {
  "@formBuilderVersion": "1";
  "@name": string;
  "@formType": "standard";
  "@versioning": "disabled";
  "@defaultView": "flat";
  "@revisionNumber"?: string;
  "@xmlElementName": "template";
  "@initialRepeatableElementId"?: string;
  "@maxInputElements"?: string;
  template: [VersioningOptions, Actions, Validations, Events, DataSourceConfig];
}
export interface V234 {
  template: [V234Template];
}
/**
 * This interface was referenced by `V234`'s JSON-Schema
 * via the `definition` "template".
 */
export interface V234Template {
  "@formBuilderVersion": "2" | "3" | "4";
  "@name": string;
  "@formType": "standard" | "dvir" | "dvir.3rdSignature";
  "@versioning": "disabled" | "enabled";
  "@defaultView": "flat" | "section";
  "@revisionNumber"?: string;
  "@xmlElementName": "template";
  "@initialRepeatableElementId"?: string;
  "@maxInputElements"?: string;
  template: [VersioningOptions, Actions, Validations, Events, DataSourceConfig, Content, NotSupportedText];
}
