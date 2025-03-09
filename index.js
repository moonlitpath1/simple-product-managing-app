const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv'); // Add dotenv to load .env file
const productRoute = require('./routes/products.routes.js');

dotenv.config(); // Load environment variables from .env file

const app = express();

// middleware config
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api/products', productRoute);

// on port 3000 (localhost:3000)
app.get('/', (req, res) => {
    res.send("Hello from Node API Server");
});

// connect to MongoDB using the environment variable
mongoose.connect(process.env.MONGODB_URI) // Use the URI from the .env file
.then(() => {
    console.log("Connection successful");
    app.listen(3000, () => {
        console.log('Server running on port 3000');
    });
})
.catch(() => {
    console.log("Connection failed");
});
