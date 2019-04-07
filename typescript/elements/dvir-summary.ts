export interface DvirSummary {
  "@xmlElementName": "dvirSummary";
  "@name": string;
  "@id": string;
  "@required": "false";
  "@actions"?: string;
  dvirSummary?: [DvirSummaryPassed, DvirSummaryFailed, DvirSummaryFixed, DvirSummaryNa];
  "@parentId"?: string;
}
/**
 * This interface was referenced by `DvirSummary`'s JSON-Schema
 * via the `definition` "passed".
 */
export interface DvirSummaryPassed {
  "@xmlElementName"?: "passed";
}
/**
 * This interface was referenced by `DvirSummary`'s JSON-Schema
 * via the `definition` "failed".
 */
export interface DvirSummaryFailed {
  "@xmlElementName"?: "failed";
}
/**
 * This interface was referenced by `DvirSummary`'s JSON-Schema
 * via the `definition` "na".
 */
export interface DvirSummaryNa {
  "@xmlElementName"?: "na";
}
/**
 * This interface was referenced by `DvirSummary`'s JSON-Schema
 * via the `definition` "fixed".
 */
export interface DvirSummaryFixed {
  "@xmlElementName"?: "fixed";
}
