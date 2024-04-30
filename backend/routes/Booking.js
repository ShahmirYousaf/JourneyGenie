const express = require('express');
const router = express.Router();
const Package = require('../models/Package'); // Import the Package model

// Route to retrieve tour packages based on CSV data
router.get('/tour-packages', async (req, res) => {
  try {
    // Parse CSV data (example data, replace with actual CSV parsing logic)
    const countryName = 'Country Name'; // Example: Read country name from CSV
    const startingPrice = 100; // Example: Read starting price from CSV
    const startDate = new Date('2024-05-15'); // Example: Read start date from CSV

    // Query MongoDB using Mongoose to find matching tour packages
    const tourPackages = await Package.find({
      country: countryName,
      startingPrice: { $gte: startingPrice }, // Find packages with price >= startingPrice
      startDate: { $gte: startDate }, // Find packages starting on or after startDate
    });

    if (tourPackages.length === 0) {
      return res.status(404).json({ message: 'No tour packages found matching the criteria' });
    }

    res.json({ tourPackages });
  } catch (error) {
    console.error('Error retrieving tour packages:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
