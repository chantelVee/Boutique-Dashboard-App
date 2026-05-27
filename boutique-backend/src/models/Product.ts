import { Schema, model, Document } from 'mongoose';

export interface IProduct extends Document {
    name: string;
    price: number;
    stockQuantity: number;
    lowStockThreshold: number;
    category: string;
    imageUrl: string;
}

const productSchema = new Schema<IProduct>({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    stockQuantity: {type: Number, required: true},
    lowStockThreshold: {type: Number, default: 5},
    category: {type: String, required: true},
    imageUrl: {type: String, required: true},
});

const Product = model<IProduct>('Product', productSchema);

export default Product;