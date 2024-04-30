const mongoose = require('mongoose');

// Define Package Schema
const packageSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true
  },
  startingPrice: {
    type: Number,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  // Add more fields as needed (e.g., tourName, description, imageUrl, etc.)
});

// Create Package Model based on Package Schema
const Package = mongoose.model('Package', packageSchema);

module.exports = Package;
