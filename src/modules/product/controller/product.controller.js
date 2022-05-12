//import products from '../../../common/mock-data/products.json' assert {type: "json"};
import ProductService from '../services/product.service.js';

const ProductController = {
    getProduct: async (req, res) => {
        const products = await ProductService.getAll();
        res.status(200).json({
            success : true,
            data: products
        })
    },
    getProductById: async (req, res) => {
        const { id } = req.params
        const products = await ProductService.getOne(id);
        res.status(200).json({
            success : true,
            data: products
        })
    },
    createProduct: async (req, res) => {
        const {name, price} = req.body
        const created = await ProductService.create({name, price});

        res.status(201).json({
            success : true,
            data: created
        })
    },
    updateProduct: async (req, res) => {
        const { id } = req.params
        const { name,price } = req.body
        const updated = await ProductService.updateOne(id, {name, price})
    
        res.status(200).json({
            success : true,
            data: updated
        })
    }
}

export default ProductController;