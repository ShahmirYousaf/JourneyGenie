require('dotenv').config();
const express = require("express");
const cors = require("cors");
const connection = require("./database");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const app = express();


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
app.use('/api/entries', require('./routes/entry')); 
app.use('/api', require('./routes/stats'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));