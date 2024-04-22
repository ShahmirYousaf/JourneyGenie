const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));