//main file

const express = require('express')
const mongoose = require('mongoose');
//there should be a ./ before file location
const productRoute = require('./routes/products.routes.js');

const app = express()

//middleware config
app.use(express.json());
app.use(express.urlencoded({extended: false})); 

//routes
app.use('/api/products', productRoute);


//on port 3000 (localhost:3000)
app.get('/', (req, res) => {
    res.send("Hello from Node API Server");
});



//connect to mongodb
mongoose.connect("mongodb+srv://admin:HpivUTkDtAPmzOxU@backenddb.rk8oe.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("connection successful");
    //on the console screen
    app.listen(3000, () => {
        console.log('server runs at port 3000');
    })

})
.catch(() => {
    console.log("connection failed")
})