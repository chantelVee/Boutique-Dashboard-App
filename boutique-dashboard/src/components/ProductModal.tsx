import React, {useState} from 'react';
import {Modal, Box, Typography, TextField, Button, Stack} from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
};

interface ProductModalProps {
    open: boolean;
    handleClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({open, handleClose}) => {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        stockQuantity: '',
        category: '',
        imageUrl: '',
        lowStockThreshold: 5,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async () => {
        //call API
        console.log("Submitting to Backend:", formData);
        handleClose();
    }

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
                <Typography variant="h6" component="h2" gutterBottom>
                    Add New Luxury Item
                </Typography>

                <Stack spacing={2} sx={{mt: 2}}>
                    <TextField name="name" label="Product Name" fullWidth onChange={handleChange} />
                    <TextField name="price" label="Price" type="number" fullWidth onChange={handleChange} />
                    <TextField name="category" label="Category" fullWidth onChange={handleChange} />
                    <TextField name="stockQuantity" label="Initial Stock" type="number" fullWidth onChange={handleChange} />
                    <TextField name="imageUrl" label="Image Url" fullWidth onChange={handleChange} />

                    <Button variant="contained" color="primary" onClick={handleSubmit} fullWidth>
                        Add to Inventory
                    </Button>
                </Stack>
            </Box>
        </Modal>
    )
};

export default ProductModal;