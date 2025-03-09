//import mongoose
const mongoose = require('mongoose')

//create a schema for your db.
const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter product name"]
        },

        quantity: {
            type: Number,
            required: true,
            default: 0
        },

        price: {
            type: Number,
            required: true,
            default: 0
        },

        image: {
            type: String,
            required: false
        },
    },
    {
        timestamps: true,
    }
);

//convert to table in mongodb
//make Product singular -- 's' get added bt itself
const Product = mongoose.model("Product", ProductSchema );

//export it
module.exports = Product;