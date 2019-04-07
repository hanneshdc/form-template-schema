export interface PrepopulationRules {
  "@id": string;
  "@xmlElementName": "prepopulationRules";
  prepopulationRules?: PrepopulationRulesPrepopulationRule[];
}
/**
 * This interface was referenced by `PrepopulationRules`'s JSON-Schema
 * via the `definition` "prepopulationRule".
 */
export interface PrepopulationRulesPrepopulationRule {
  "@id": string;
  "@queryRuleId": string;
  "@xmlElementName": "ppRule";
}
