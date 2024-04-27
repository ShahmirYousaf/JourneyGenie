require('dotenv').config();
const express = require("express");
const cors = require("cors");
const connection = require("./database");
const app = express();
import helmet from "helmet"; 
import morgan from "morgan"; 
import cookieParser from "cookie-parser"; 

// Database Connection
connection();

// Middleware
app.use(cookieParser()) 
app.use(express.json());
app.use(cors());
app.use(helmet()); 

app.use(morgan("common")); 

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use("/api/entries", entryRoute); 

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));