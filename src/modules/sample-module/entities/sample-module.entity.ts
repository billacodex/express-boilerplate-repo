import {IEntity} from "../../../core/entity/entity.interface";
import {v4 as uuidv4} from "uuid";

export class SampleModuleEntity implements IEntity {
  uuid!: string;
  fullName!: string;

  constructor(data: Partial<SampleModuleEntity> = {}) {
    this.uuid = data.uuid || uuidv4();
    this.fullName = data.fullName || "";
  }
}
