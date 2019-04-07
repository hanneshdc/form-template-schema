import {VersioningOptions} from "./versioning-options";
import {Actions} from "./actions";
import {Validations} from "./validations";
import {Events} from "./events";
import {DataSourceConfig} from "./data-source-config/data-source-config";
import {AnyElement} from "./elements/any-element";

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
