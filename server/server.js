import mongoose from 'mongoose';
import express from 'express';

import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(() => console.log('MONGODB CONNECTED')).catch((error) => console.log(error));

const app = express();

const PORT = process.env.PORT || 5000;
app.use(cookieParser());
app.use(express.json());
app.use(
    cors({
        origin:'http://localhost:5173/',
        methods:['GET','POST','PUT','DELETE'],
        allowedHeaders:[
            'Content-Type',
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
        credentials:true,
    })
)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);   
})