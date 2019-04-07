import {QueryRules} from "./query-rules";
import {PrepopulationRules} from "./prepopulation-rules";
import {QueryFields} from "./query-fields";
import {DataSources} from "./data-sources";

export interface DataSourceConfig {
  "@xmlElementName": "dataSourceConfig";
  "@id": string;
  "@version": "1.1";
  dataSourceConfig?: [QueryRules, PrepopulationRules, QueryFields, DataSources];
}
