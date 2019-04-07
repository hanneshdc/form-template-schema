export interface Validations {
  "@xmlElementName": "validations";
  validations?: {
    "@id": string;
    "@name":
      | "IsNotEmpty"
      | "IsEmpty"
      | "IsSelected"
      | "IsNotSelected"
      | "IsSigned"
      | "IsTextOnly"
      | "IsNumericOnly"
      | "IsAlphaNumeric"
      | "IsUnitedStatesPhoneNumber"
      | "IsValidEmailAddress"
      | "IsDdMmYyyyFormatDate"
      | "IsMmDdYyyyFormatDate"
      | "IsYyyyMmDdFormatDate"
      | "IsHhMmAmPmFormatTime"
      | "IsHhMm24HrFormatTime"
      | "IsNotSigned";
    "@xmlElementName": "validation";
    "@data"?: string;
  }[];
}
