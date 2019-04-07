import {VersioningOptions} from "./versioning-options";
import {Actions} from "./actions";
import {Validations} from "./validations";
import {Events} from "./events";
import {DataSourceConfig} from "./data-source-config/data-source-config";
import {Content} from "./elements/layout\content";
import {NotSupportedText} from "./elements/not-supported-text";

export type AnyElement =
  | Text
  | Textbox
  | Dropdown
  | Checkbox
  | DvirControl
  | DvirSummary
  | Signature
  | Location
  | Image
  | Section;

export interface V4 {
  template: [V4Template];
}
/**
 * This interface was referenced by `V4`'s JSON-Schema
 * via the `definition` "template".
 */
export interface V4Template {
  "@formBuilderVersion": "4";
  "@name": string;
  "@formType": "standard";
  "@versioning": "disabled";
  "@defaultView": "flat" | "section";
  "@revisionNumber"?: string;
  "@xmlElementName": "template";
  "@initialRepeatableElementId": string;
  "@maxInputElements": string;
  template: [VersioningOptions, Actions, Validations, Events, DataSourceConfig, Content, NotSupportedText];
}
