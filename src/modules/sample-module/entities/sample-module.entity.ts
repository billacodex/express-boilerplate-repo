import {v4 as uuidv4} from "uuid";
import { BaseEntity } from "../../../core/models/response/base.entity";

export class SampleModuleEntity extends BaseEntity<SampleModuleEntity> {
  uuid: string;
  fullName: string;

  constructor(data: Partial<SampleModuleEntity> = {}) {
    super(data);
    this.uuid = data.uuid || uuidv4();
    this.fullName = data.fullName || "";
  }
}
