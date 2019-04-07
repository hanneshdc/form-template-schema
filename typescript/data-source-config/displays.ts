import {Empty} from "./empty";

export interface Displays {
  "@id": string;
  "@xmlElementName": "displays";
  displays: DisplaysDisplay[];
}
/**
 * This interface was referenced by `Displays`'s JSON-Schema
 * via the `definition` "display".
 */
export interface DisplaysDisplay {
  "@id": string;
  "@xmlElementName": "display";
  display: (DisplaysDsFieldId | DisplaysFreeFormText | Empty)[];
}
/**
 * This interface was referenced by `Displays`'s JSON-Schema
 * via the `definition` "dsFieldId".
 */
export interface DisplaysDsFieldId {
  "@xmlElementName": "dsFieldId";
  "@id": string;
  "#text": string;
}
/**
 * This interface was referenced by `Displays`'s JSON-Schema
 * via the `definition` "freeFormText".
 */
export interface DisplaysFreeFormText {
  "@xmlElementName": "freeFormText";
  "@id": string;
  "#text": string;
}
export interface Empty {
  "@xmlElementName": "empty";
}
