export interface VersioningOptions {
  "@xmlElementName": "versioningOptions";
  versioningOptions?: [VersioningOptionsClient];
}
/**
 * This interface was referenced by `VersioningOptions`'s JSON-Schema
 * via the `definition` "client".
 */
export interface VersioningOptionsClient {
  "@xmlElementName": "client";
  client: [VersioningOptionsDefaultUpdateViewMode];
}
/**
 * This interface was referenced by `VersioningOptions`'s JSON-Schema
 * via the `definition` "defaultUpdateViewMode".
 */
export interface VersioningOptionsDefaultUpdateViewMode {
  "@xmlElementName": "defaultUpdateViewMode";
  "#text": "highlightChangedItems";
}
