export interface QueryRules {
  "@id": string;
  "@xmlElementName": "queryRules";
  queryRules: QueryRulesQueryRule[];
}
/**
 * This interface was referenced by `QueryRules`'s JSON-Schema
 * via the `definition` "queryRule".
 */
export interface QueryRulesQueryRule {
  "@id": string;
  "@dataSourceId": string;
  "@filterId": string;
  "@displayId": string;
  "@populateId": string;
  "@xmlElementName": "queryRule";
}
