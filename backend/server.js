/* -------------------------------------------------------------------------- */
/*        TUTORIAL WAS IN COMMONJS SYNTAX, SO I CONVERTED TO ES6 SYNTAX       */
/* -------------------------------------------------------------------------- */

import express from "express";
import dotenv from "dotenv";
import goalRoutes from "./routes/goalRoutes.js";

const env = dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

// When the server receives a GET request to the /api/goals endpoint, \it will call the goalRoutes function
app.use('/api/goals', goalRoutes)

app.listen(port, () => console.log(`Server running on port ${port}`));
