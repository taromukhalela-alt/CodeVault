import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './database/db.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import { log } from './utils/index.js';

dotenv.config();
connectDB();
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/project', projectRoutes);

app.run(3000 || process.env.PORT, () => {
    log('Server is running on port 3000');
});
