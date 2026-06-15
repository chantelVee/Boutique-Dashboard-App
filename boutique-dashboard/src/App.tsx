import { useState } from 'react';
import { Typography, Button, Box, Grid, Paper, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Drawer } from "@mui/material";
import { Home as HomeIcon, Inventory as InventoryIcon, LocalOffer as TagIcon, Settings as SettingsIcon, AttachMoney as MoneyIcon, Warning as WarningIcon } from '@mui/icons-material';
import { ProductCard } from "./components/ProductCard";
import type { Product } from './types/inventory';
import ProductModal from './components/ProductModal';
import './App.css';

// mock data for products
const MOCK_PRODUCTS: Product[] = [
    {
        id: '1',
        name: 'Premium Leather Weekend Bag',
        price: 360,
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

const drawerWidth = 240;

function App() {
    const [modalOpen, setModalOpen] = useState(false);

    // sidebar Items
    const sidebarItems = [
        { text: 'Dashboard', icon: <HomeIcon color="primary" /> },
        { text: 'Inventory', icon: <InventoryIcon color="primary" /> },
        { text: 'Sales', icon: <TagIcon color="primary" /> },
        { text: 'Settings', icon: <SettingsIcon color="primary" /> },
    ];

    return (
        <Box sx={{ display: 'flex' }}>
            {/* the sidebar */}
            <Drawer
                variant='permanent'
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        background: '#fcfcfc',
                        borderRight: '1px solid #eee'
                    },
                }}
            >
                {/* boutique title area */}
                <Box sx={{ p: 3, borderBottom: '1px solid #eee' }}>
                    <Typography variant="h6" color='primary' sx={{ fontWeight: 800 }}>
                        Luxury Boutique
                    </Typography>
                </Box>

                {/* navigation list */}
                <List sx={{ px: 1, pt: 2 }}>
                    {sidebarItems.map((item, index) => (
                        <ListItem key={item.text} disablePadding>
                            <ListItemButton
                                sx={{
                                    borderRadius: '8px',
                                    mb: 0.5,
                                    bgcolor: index === 1 ? 'rgba(25, 118, 210, 0.08)' : 'transparent',
                                    '&:hover': { bgcolor: 'rgba(25, 118, 210, 0.04)' }
                                }}
                            >
                                <ListItemIcon sx={{ minWidth: 40 }}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={
                                        <Typography
                                            sx={{
                                                fontWeight: index === 1 ? 600 : 400,
                                                fontSize: '0.9rem',
                                                color: 'text.primary'
                                            }}
                                        >
                                            {item.text}
                                        </Typography>
                                    }
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>

                        {/* // main content area */}
            <Box component="main" sx={{ flexGrow: 1, p: 4, bgcolor: '#f4f6f8', minHeight: '100vh' }}>
                {/* kpi cards */}
                <Grid container spacing={3} sx={{ mb: 4 }}>
                    {[
                        { title: 'Total Stock Value', value: '£4,520', icon: <MoneyIcon fontSize="large" />, color: '#1976d2' },
                        { title: 'Active Products', value: '3', icon: <InventoryIcon fontSize="large" />, color: '#2e7d32' },
                        { title: 'Low Stock Alerts', value: '2', icon: <WarningIcon fontSize="large" />, color: '#d32f2f' },
                    ].map((card) => (
                    <Grid size={{xs: 12, sm:4}} key={card.title}>
                        <Paper sx={{ p: 3, display: 'flex', alignItems: 'center', borderRadius: '12px' }} elevation={0}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1.5, borderRadius: '50%', bgcolor: `${card.color}15`, color: card.color, mr: 2.5 }}>
                                {card.icon}
                            </Box>
                            <Box>
                                <Typography variant='body2' color='text.secondary' gutterBottom>
                                    {card.title}
                                </Typography>
                                <Typography variant='h4' component='p' sx={{ fontWeight: 700 }}>
                                    {card.value}
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                    ))}
                </Grid>

                {/* inventory header and add button */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                    <Typography variant='h4' component="h1" sx={{ fontWeight: "800" }}>
                        Inventory Overview
                    </Typography>

                    <Button
                        variant='contained'
                        color='secondary'
                        onClick={() => setModalOpen(true)}
                        sx={{ textTransform: 'none', px: 3, borderRadius: '8px' }}
                    >
                        + Add New Product
                    </Button>
                </Box>

                {/* grid of items */}
                <Grid container spacing={3}>
                    {MOCK_PRODUCTS.map((item) => (
                        <Grid key={item.id} size={{xs: 12, sm:6, md:6, lg:4}}>
                            <ProductCard product={item} />
                        </Grid>
                    ))}
                </Grid>
            </Box>

                        {/* // The modal */}
            <ProductModal
                open={modalOpen}
                handleClose={() => setModalOpen(false)}
            />


        </Box>

    );
}



export default App;