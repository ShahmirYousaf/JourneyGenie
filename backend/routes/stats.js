const express = require('express');
const router = express.Router();
const {User, validate} = require('../models/User');

// Route to fetch user statistics
router.get('/userStats', async (req, res) => {
    try {
      // Count the number of male and female users
      const maleCount = await User.countDocuments({ gender: 'male' });
      const femaleCount = await User.countDocuments({ gender: 'female' });
        
      // Send the user statistics as JSON response
      res.json({ maleCount, femaleCount });
    } catch (error) {
      // Handle errors
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });

  module.exports = router;