import { Card, CardMedia, CardContent, Typography, Box, Chip} from '@mui/material';
import type { Product } from '../types/inventory';


interface Props {
    product: Product;
};

export const ProductCard = ({ product }: Props) => {
    const isLowStock = product.stockQuantity <= product.lowStockThreshold;

    return (
        <Card sx={{
            borderRadius: '40px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)',
            overflow: 'hidden',
        }}>
            <CardMedia
                component="img"
                height="200"
                image={product.imageUrl}
                alt={product.name}
                sx={{ objectFit: 'cover' }}
            />
            <CardContent sx={{ margin: '0 auto', textAlign: 'center' }}>
                <Box sx={{mb:1}}>
                    <Typography variant="h6" sx={{fontWeight:"700"}}>{product.name}</Typography>
                    
                </Box>
                <Typography variant="h4" sx={{color: "primary.main", fontWeight:"800", marginBottom: '2rem', borderBottom: '2px solid #eee', paddingBottom: '1.5rem'    }}>
                    £{product.price.toLocaleString()}
                </Typography>
                <Chip
                        label={isLowStock ? 'Priority Restock' : 'Stable'}
                        color={isLowStock ? 'error' : 'default'}
                        size="small"
                        sx={{fontWeight: 'bold', padding: '0.25rem 0.75rem', fontSize: '0.75rem'}}
                    />
                <Typography variant="body2" sx={{color: "text.secondary", mt: 1, paddingTop: '0.5rem' }}>
                    Inventory: {product.stockQuantity} units remaining
                </Typography>
            </CardContent>
        </Card>
    );
};
