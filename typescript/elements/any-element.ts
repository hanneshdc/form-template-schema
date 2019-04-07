import {Text} from "./text";
import {Textbox} from "./textbox";
import {Dropdown} from "./dropdown";
import {Radio} from "./radio";
import {Checkbox} from "./checkbox";
import {DvirControl} from "./dvir-control";
import {DvirSummary} from "./dvir-summary";
import {Signature} from "./signature";
import {Location} from "./location";
import {Qrcode} from "./qrcode";
import {Image} from "./image";
import {Diagram} from "./diagram";
import {Section} from "./layout/section";

export type AnyElement1 =
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

export interface Text {
  "@xmlElementName": "text";
  "@name": string;
  "@id": string;
  "@required": "true" | "false";
  "@parentId"?: string;
  "#text": string;
  "@actions"?: string;
}
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
export interface Dropdown {
  "@xmlElementName": "dropdown";
  "@name": string;
  "@id": string;
  "@required": "true" | "false";
  dropdown: Option[];
  "@parentId"?: string;
  "@events"?: string;
  "@validations"?: string;
  "@actions"?: string;
}
export interface Option {
  "@xmlElementName": "option";
  "#text": string;
}
export interface Radio {
  "@xmlElementName": "radio";
  "@name": string;
  "@id": string;
  "@required": "true" | "false";
  radio: Option[];
  "@parentId"?: string;
  "@events"?: string;
  "@validations"?: string;
  "@actions"?: string;
}
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
export interface DvirSummary {
  "@xmlElementName": "dvirSummary";
  "@name": string;
  "@id": string;
  "@required": "false";
  "@actions"?: string;
  dvirSummary?: [DvirSummaryPassed, DvirSummaryFailed, DvirSummaryFixed, DvirSummaryNa];
  "@parentId"?: string;
}
/**
 * This interface was referenced by `DvirSummary`'s JSON-Schema
 * via the `definition` "passed".
 */
export interface DvirSummaryPassed {
  "@xmlElementName"?: "passed";
}
/**
 * This interface was referenced by `DvirSummary`'s JSON-Schema
 * via the `definition` "failed".
 */
export interface DvirSummaryFailed {
  "@xmlElementName"?: "failed";
}
/**
 * This interface was referenced by `DvirSummary`'s JSON-Schema
 * via the `definition` "na".
 */
export interface DvirSummaryNa {
  "@xmlElementName"?: "na";
}
/**
 * This interface was referenced by `DvirSummary`'s JSON-Schema
 * via the `definition` "fixed".
 */
export interface DvirSummaryFixed {
  "@xmlElementName"?: "fixed";
}
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
export interface Qrcode {
  "@xmlElementName": "qrcode";
  "@name": string;
  "@id": string;
  "@required": "true" | "false";
  "@parentId"?: string;
  "@verificationValue": string;
  "@validations"?: string;
}
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
export interface Section {
  "@xmlElementName": "section";
  "@name": string;
  "@id": string;
  "@required": "false";
  "@actions"?: string;
  section: Page[];
  "@parentId"?: string;
  "@repeatable"?: "true";
  "@initialInstances"?: string;
  "@minInstances"?: string;
  "@maxInstances"?: string;
}
export interface Page {
  "@xmlElementName": "page";
  "@id": string;
  page: AnyElement[];
}
