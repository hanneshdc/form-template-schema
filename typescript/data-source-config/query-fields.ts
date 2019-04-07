export interface QueryFields {
  "@id": string;
  "@xmlElementName": "queryFields";
  queryFields?: QueryFieldsQueryField[];
}
/**
 * This interface was referenced by `QueryFields`'s JSON-Schema
 * via the `definition` "queryField".
 */
export interface QueryFieldsQueryField {
  "@id": string;
  "@queryRuleId": string;
  "@dsFieldId": string;
  "@xmlElementName": "queryField";
}
