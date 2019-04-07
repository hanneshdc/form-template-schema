import {Option} from "./option";

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
export interface Option {
  "@xmlElementName": "option";
  "#text": string;
}
