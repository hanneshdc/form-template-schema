import {MappingV2} from "./mapping-v2";
import {Mapping} from "./mapping";
import {Empty} from "./empty";

export interface Filters {
  "@id": string;
  "@xmlElementName": "filters";
  filters: FiltersFilter[];
}
/**
 * This interface was referenced by `Filters`'s JSON-Schema
 * via the `definition` "filter".
 */
export interface FiltersFilter {
  "@id": string;
  "@xmlElementName": "filter";
  filter: (MappingV2 | Mapping | Empty)[];
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
