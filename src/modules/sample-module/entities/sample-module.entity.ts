import {v4 as uuidv4} from "uuid";
import { BaseEntity } from "../../../core/models/response/base.entity";

export class SampleModuleEntity extends BaseEntity<SampleModuleEntity> {
  id: string;
  fullName: string;

  constructor(data: Partial<SampleModuleEntity> = {}) {
    super(data);
    this.id = data.id || uuidv4();
    this.fullName = data.fullName || "";
  }
}
