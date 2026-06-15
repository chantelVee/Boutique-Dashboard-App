// the contract for the inventory system

export interface Product {
    id: string;
    name: string;
    price: number;
    stockQuantity: number;
    lowStockThreshold: number;
    category: 'Accessories' | 'Home' | 'Clothing' | 'Lifestyle';
    imageUrl: string;
};