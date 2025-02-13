import {PostgresRepository} from "../../core/databases/postgres/postgres.repository";
import configurations from "../../server-config/configurations";
import {SampleModuleEntity} from "./entities/sample-module.entity";

export class SampleModuleRepository extends PostgresRepository<SampleModuleEntity> {
  constructor() {
    super(configurations().postgres.sampleModuleTable);
  }

  protected docToEntity(
    doc: any
  ): SampleModuleEntity {
    const metadata = new SampleModuleEntity({
      uuid: doc.get("uuid") || "",
      fullName: doc.get("full_name") || "",
    } as SampleModuleEntity);

    return metadata;
  }
}
