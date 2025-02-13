import Joi from "joi";

export interface SampleModuleRequest {
  full_name: string;
}

export const SampleModuleSchema = Joi.object<SampleModuleRequest>({
  full_name: Joi.string().required(),
});
