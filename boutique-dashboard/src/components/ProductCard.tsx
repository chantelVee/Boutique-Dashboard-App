import { Card, CardMedia, CardContent, Typography, Box, Chip} from '@mui/material';
import type { Product } from '../types/inventory';

interface Props {
    product: Product;
};

export const ProductCard = ({ product }: Props) => {
    const isLowStock = product.stockQuantity <= product.lowStockThreshold;

    return (
        <Card sx={{
            borderRadius: 4,
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
            overflow: 'hidden',
        }}>
            <CardMedia
                component="img"
                height="240"
                image={product.imageUrl}
                alt={product.name}
                sx={{ objectFit: 'cover' }}
            />
            <CardContent>
                <Box sx={{display:"flex", justifyContent:"space-between", mb:1}}>
                    <Typography variant="h6" sx={{fontWeight:"700"}}>{product.name}</Typography>
                    <Chip
                        label={isLowStock ? 'Priority Restock' : 'Stable'}
                        color={isLowStock ? 'error' : 'default'}
                        size="small"
                        sx={{fontWeight: 'bold'}}
                    />
                </Box>
                <Typography variant="h5" sx={{color: "primary.main", fontWeight:"800"}}>
                    ${product.price.toLocaleString()}
                </Typography>
                <Typography variant="body2" sx={{color: "text.secondary", mt: 1}}>
                    Inventory: {product.stockQuantity} units remaining
                </Typography>
            </CardContent>
        </Card>
    );
};
