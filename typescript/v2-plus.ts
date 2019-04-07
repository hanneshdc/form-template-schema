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

export interface V2Plus {
  template: [V2PlusTemplate];
}
/**
 * This interface was referenced by `V2Plus`'s JSON-Schema
 * via the `definition` "template".
 */
export interface V2PlusTemplate {
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
