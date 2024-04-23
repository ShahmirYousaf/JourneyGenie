require('dotenv').config();
const express = require("express");
const cors = require("cors");
const connection = require("./database");
const app = express();

// Database Connection
connection();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));