const Product = require('../models/product.model.js');

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);     
        res.status(200).json(product)
    } catch (error) {
       res.status(500).json({message: error.message}); 
    }
};

const addProduct = async (req, res) => {
    try 
    {
        const product = await Product.create(req.body);
        res.status(200).json(product);         
        //200 is success HTTP code
        
    } 
    //500 is HTTP error code  -- meaning server encountered unexpected error, and couldnt fulfill request
    catch (error) 
    {
        res.status(500).json({message: error.message});
    }
    
};

const updateProduct = async (req,res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);

        if(!product)
        {
            return res.status(404).json({message: "Product not found"});
        }
        const updateProd = await Product.findById(id);
        res.status(200).json(product);
    
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};


const deleteProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id); 

        if(!product)
        {
            return res.status(404).json({message: "Product ID not found"});
        }      
        res.status(200).json({message: "Deleted successfully"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

module.exports  = {
    addProduct,
    getProduct,
    getProducts,
    updateProduct,
    deleteProduct
}