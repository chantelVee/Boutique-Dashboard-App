import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

// connection to MongoDB
const MONGO_URI = process.env.MONGO_URI || "";

mongoose.connect(MONGO_URI)
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch((err) => console.error('❌ MongoDB Connection error:', err));

// test route
app.get('/api/test', (req, res) => {
    res.json({ 
        message: "The Boutique Backend is officially awake!",
        status: "Online",
        timestamp: new Date()
    });
});

// start server
const PORT = 5001;
app.listen(PORT, () => {
    console.log(
        `THE ENGINE IS ON
        🚀 listening at http://localhost:{PORT}
        test link: http://localhost:${PORT}/api/test`
    );
});