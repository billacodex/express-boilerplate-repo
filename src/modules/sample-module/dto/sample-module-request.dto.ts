import Joi from "joi";

export interface SampleModuleRequest {
  full_name: string;
  id: string;
}

export const SampleModuleSchema = Joi.object<SampleModuleRequest>({
  full_name: Joi.string().required(),
  id: Joi.string().optional(),
});
