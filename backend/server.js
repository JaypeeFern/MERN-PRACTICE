/* -------------------------------------------------------------------------- */
/*        TUTORIAL WAS IN COMMONJS SYNTAX, SO I CONVERTED TO ES6 SYNTAX       */
/* -------------------------------------------------------------------------- */

import express from "express";
import dotenv from "dotenv";
import goalRoutes from "./routes/goalRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";

const env = dotenv.config();
const port = process.env.PORT || 5000;

// Initialize express
const app = express();

// This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json());

// This is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.
app.use(express.urlencoded({ extended: true }));

// When the server receives a GET request to the /api/goals endpoint, \it will call the goalRoutes function
app.use("/api/goals", goalRoutes);

// This is a custom middleware function that will be called when an error occurs
app.use(errorHandler);

// Start the server
app.listen(port, () => console.log(`Server running on port ${port}`));
