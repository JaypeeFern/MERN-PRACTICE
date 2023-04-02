/* -------------------------------------------------------------------------- */
/*        TUTORIAL WAS IN COMMONJS SYNTAX, SO I CONVERTED TO ES6 SYNTAX       */
/* -------------------------------------------------------------------------- */

import express from 'express';
import dotenv from 'dotenv';
import goalRoutes from './routes/goalRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import colors from 'colors';
import cors from 'cors';

const env = dotenv.config();
const port = process.env.PORT || 5000;

// Connect to database
connectDB();

// Initialize express
const app = express();

// Enable CORS
app.use(cors({origin: process.env.ORIGIN}));

// This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json());

// This is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.
app.use(express.urlencoded({ extended: true }));

// When the server receives a GET request to the /api/goals endpoint, it will call the goalRoutes function
app.use('/api/goals', goalRoutes);

// When the server receives a GET request to the /api/users endpoint, it will call the userRoutes function
app.use('/api/users', userRoutes);

// This is a custom middleware function that will be called when an error occurs
app.use(errorHandler);

// Start the server
app.listen(port, () => console.log(`Server running on port ${port}`));
