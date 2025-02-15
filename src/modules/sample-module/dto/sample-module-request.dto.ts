import Joi from "joi";

export interface SampleModuleRequest {
  full_name: string;
  uuid: string;
}

export const SampleModuleSchema = Joi.object<SampleModuleRequest>({
  full_name: Joi.string().required(),
  uuid: Joi.string().optional(),
});
