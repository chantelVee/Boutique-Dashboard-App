import {Container, Grid, Typography} from "@mui/material";
import {ProductCard} from "./components/ProductCard";
import type { Product } from './types/inventory';

// mock data for products
const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Premium Leather Weekend Bag',
    price: 450,
    stockQuantity: 3,
    lowStockThreshold: 5,
    category: 'Accessories',
    imageUrl: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=400'
  },
  {
    id: '2',
    name: 'Ceramic Essential Oil Diffuser',
    price: 85,
    stockQuantity: 12,
    lowStockThreshold: 5,
    category: 'Home',
    imageUrl: 'https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&w=400'
  },
  {
    id: '3',
    name: 'Silk Sleep Mask',
    price: 45,
    stockQuantity: 2,
    lowStockThreshold: 5,
    category: 'Lifestyle',
    imageUrl: 'https://images.unsplash.com/photo-1742794565428-1a74fa73f1c9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxN3wwfDF8c2VhcmNofDM0fHxzbGVlcCUyMG1hc2t8ZW58MHx8fHwxNzc5Nzk5MDU5fDA&ixlib=rb-4.1.0&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450'
  }
];

function App() {
	
    return (
        <Container sx={{ py: 8 }}>
            <Typography variant="h3" component="h1" sx={{fontWeight: "900", mb: 4}}>
                Inventory Overview
            </Typography>
            <Grid container spacing={4}>
                {MOCK_PRODUCTS.map((item) => (
                    <Grid key={item.id} size={ {xs: 12, sm: 6, md: 4}}>
                        <ProductCard product={item} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default App;