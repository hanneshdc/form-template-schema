import {Server} from "./server";
import {DsFields} from "./ds-fields";
import {Filters} from "./filters";
import {Displays} from "./displays";
import {Populates} from "./populates";

export interface DataSources {
  "@id": string;
  "@xmlElementName": "dataSources";
  dataSources: DataSourcesDataSource[];
}
/**
 * This interface was referenced by `DataSources`'s JSON-Schema
 * via the `definition` "dataSource".
 */
export interface DataSourcesDataSource {
  "@id": string;
  "@xmlElementName": "dataSource";
  dataSource: [Server, DsFields, Filters, Displays, Populates];
}
