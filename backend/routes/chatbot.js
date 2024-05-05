// routes/chatbot.js
const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/chat', async (req, res) => {
    const { message, sessionId } = req.body;

  // Send message to BrainShop API
  try {
    const response = await axios.get(process.env.API_URL, {
      params: {
        // bid: process.env.BOT_ID,
        // key: process.env.API_KEY,
        uid: sessionId, 
        msg: message,
      },
    });

    console.log(response);
    res.json({ response: response.data.cnt });
  } catch (error) {
    console.error('Error sending message to BrainShop API:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
