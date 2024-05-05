require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
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
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet()); 

app.use(morgan("common")); 
app.use(helmet());
app.use(morgan("dev"));
app.use(cookieParser());

// Define and use existing routes (e.g., auth, booking, etc.)
app.use('/api/auth', require('./routes/auth'));
app.use('/api/entries', require('./routes/entry')); 
app.use('/api', require('./routes/stats'));
app.use('/api/chatbot', require('./routes/chatbot'));

app.use('/api/booking', require('./routes/Booking'));
// Add other routes as needed

// Route to create a PaymentIntent for Stripe payments
app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  try {
    // Calculate order amount (replace this with your logic)
    const calculateOrderAmount = () => {
      return 1400; // Example: hard-coded amount for demonstration
    };

    // Create a PaymentIntent with the calculated order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: "usd",
      // Optional: Enable automatic payment methods
      automatic_payment_methods: {
        enabled: true,
      },
    });

    // Send the client secret (needed to confirm the payment on the client side)
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error creating PaymentIntent:", error.message);
    res.status(500).json({ error: "Failed to create PaymentIntent" });
  }
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
