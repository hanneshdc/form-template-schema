export interface Actions {
  "@xmlElementName": "actions";
  actions?: ActionsAction[];
}
/**
 * This interface was referenced by `Actions`'s JSON-Schema
 * via the `definition` "action".
 */
export interface ActionsAction {
  "@id": string;
  "@name": "SetVisibility" | "GoTo";
  "@xmlElementName": "action";
}
