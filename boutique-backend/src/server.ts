import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import productRoutes from './routes/productRoutes';

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

// connection to MongoDB
const MONGO_URI = process.env.MONGO_URI || "";

mongoose.connect(MONGO_URI)
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch((err) => console.error('❌ MongoDB Connection error:', err));

    app.use('/api/products', productRoutes);


// start server
const PORT = 5001;
app.listen(PORT, () => {
    console.log(
        `THE ENGINE IS ON
        ✅ listening at http://localhost:{PORT}`
    );
});