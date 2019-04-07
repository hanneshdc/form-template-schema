export interface Events {
  "@xmlElementName": "events";
  events?: EventsEvent[];
}
/**
 * This interface was referenced by `Events`'s JSON-Schema
 * via the `definition` "event".
 */
export interface EventsEvent {
  "@id": string;
  "@implicit"?: "true";
  "@trigger": string;
  "@additionalTriggerRequirements"?: string;
  "@targetId": string;
  "@action": string;
  "@data": "False" | "True" | "";
  "@execute": "";
  "@xmlElementName"?: "event";
}
