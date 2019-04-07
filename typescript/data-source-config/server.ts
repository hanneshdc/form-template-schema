export interface Server {
  "@id": string;
  "@xmlElementName": "server";
  server: [
    {
      "@id": string;
      "@xmlElementName": "type";
      "#text": "tde_standard_table" | "tde_custom_table" | "local" | "tde_rest_path";
    },
    {
      "@id": string;
      "@xmlElementName": "tableName";
      "#text": string;
    }
  ];
}
