import express from 'express';
import ProductController from './controller/product.controller.js';
import { createValidator } from 'express-joi-validation';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';

const validator = createValidator({});

const productRoute = express();

productRoute.get('/', ProductController.getProduct)

productRoute.get('/:id', ProductController.getProductById)

productRoute.post('/', validator.body(CreateProductDto), ProductController.createProduct)

productRoute.patch('/:id',validator.body(UpdateProductDto),ProductController.updateProduct)

export default productRoute