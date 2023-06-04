import Joi, { string } from "joi";

export const signUpSchema = ({
    name: Joi.string(),
    email: Joi.string().email().required().messages({
        "string.email": "chưa đúng định dạng email",
        "string.required": "cần nhập email",
        "string.empty": "không để trống",
    }),
    password: Joi.string().required().min(6).messages({

        "any.required": "cần nhập password",
        "any.empty": "không để trống",
    }),
})

export const signInSchema = ({

    email: Joi.string().email().required().messages({
        "string.email": "chưa đúng định dạng email",
        "string.required": "cần nhập email",
        "string.empty": "không để trống",
    }),
    password: Joi.string().required().min(6).messages({

        "any.required": "cần nhập password",
        "any.empty": "không để trống",
    }),
})