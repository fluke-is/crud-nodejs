import joi from 'joi';

export const UpdateProductDto = joi.object({
    name: joi.string().optional(),
    price: joi.number().optional()
})

export const ProductParamsDto = joi.object({
    id: joi.string().required()
})

