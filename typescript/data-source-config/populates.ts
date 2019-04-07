import {MappingV2} from "./mapping-v2";
import {Mapping} from "./mapping";
import {Empty} from "./empty";

export interface Populates {
  "@id": string;
  "@xmlElementName": "populates";
  populates: {
    "@id": string;
    "@xmlElementName": "populate";
    populate: (MappingV2 | Mapping | Empty)[];
  }[];
}
export interface MappingV2 {
  "@id": string;
  "@xmlElementName": "mappingV2";
  mappingV2: [
    {
      "@id": string;
      "@type": "userContext" | "dsFieldId" | "queryFieldId" | "rawValue";
      "@xmlElementName": "src";
      "#text": string;
    },
    {
      "@id": string;
      "@type": "dsFieldId" | "formFieldId" | "urlParam" | "recordIdentifier";
      "@xmlElementName": "dst";
      "#text"?: string;
    }
  ];
}
export interface Mapping {
  "@id": string;
  "@formFieldId": string;
  "@dsFieldId": string;
  "@xmlElementName": "mapping";
}
export interface Empty {
  "@xmlElementName": "empty";
}
