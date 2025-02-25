import allowedOrigins from './allowedOrigins.js';
import cors from 'cors';

const corsOptions = {
    origin: '*', // Temporarily allow all origins for debugging
    credentials: true, 
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200,
    credentials: true,
};
  

export default corsOptions;
