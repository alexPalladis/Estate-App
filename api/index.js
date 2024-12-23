import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import listingRouter from './routes/listing.route.js';


dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDB!')
}).catch((err) => {
    console.log(err)
});

const app = express();

const allowedOrigins = [
    'https://main.d2v5tsefsm99cr.amplifyapp.com', // Amplify frontend
    'http://localhost:3000', // Local development
  ];
  
  // Configure CORS
  app.use(cors({
    origin: (origin, callback) => {
      console.log('Incoming Origin:', origin); // Debugging: log incoming origin
      if (allowedOrigins.includes(origin)) {
        callback(null, true); // Allow the request
      } else {
        callback(new Error(`CORS Error: Origin ${origin} not allowed`)); 
      }
    },
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], 
    credentials: true
  }));

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
});

app.use(express.json());

app.use(cookieParser());

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);
app.use('/api/listing',listingRouter);

app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode: statusCode,
        message
    });
});