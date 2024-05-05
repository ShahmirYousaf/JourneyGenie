const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema( 
    { 
        author: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'User', 
        },
        tourpackage:{
            type: String,
            required:true
        },
        Price:{
            type: Number,
            required: true
        },
        Startingdate: { 
            type: String, 
            required: true
        },
        status:{
            type: String,
            enum: ["Pending", "Approved", "Cancelled"],
            default: "Pending"
        },
        IsPaid:{
            type: Boolean,
            default: false
        }
    } 
) 
  
module.exports = mongoose.model("BookingSchema", BookingSchema);