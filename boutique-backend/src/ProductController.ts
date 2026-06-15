import { Request, Response, NextFunction} from 'express';
import Product from './models/Product';


export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const createdProduct = new Product({
            name: req.body.name,
            price: req.body.price,
            stockQuantity: req.body.stockQuantity,
            lowStockThreshold: req.body.lowStockThreshold,
            category: req.body.category,
            imageUrl: req.body.imageUrl
        });

        const result = await createdProduct.save();
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({message: "Failed to save product", error});
    }
};

export const getProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({message:"Error fetching inventory"});
    }
};



