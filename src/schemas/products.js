import Joi from "joi";



export const productSchema = {
    name: Joi.string().required(),
    price: Joi.number().required(),
    image: Joi.string(),
    description: Joi.string(),
}

