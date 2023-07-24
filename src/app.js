import express from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js';
import tasksRoutes from './routes/tasks.routes.js';
import productsRoutes from './routes/products.routes.js';
import cartRoutes from './routes/cart.routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
app.use(cors({
    origin: 'https://happycompany.onrender.com',
    credentials: true,
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use('/api',authRoutes);
app.use('/api',tasksRoutes);
app.use('/api',productsRoutes);
app.use('/api',cartRoutes);
export default app;