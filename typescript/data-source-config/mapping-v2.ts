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
