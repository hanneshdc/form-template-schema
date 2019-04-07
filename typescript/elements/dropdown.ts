import {Option} from "./option";

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
