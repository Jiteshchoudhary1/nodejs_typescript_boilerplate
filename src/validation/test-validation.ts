import Joi from "joi";

export const createTestValidation = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
});
