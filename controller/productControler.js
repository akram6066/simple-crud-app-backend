const Product = require('../module/productModel.js');

const getProducts = async (req,res)=>{
    try {
        const product = await Product.find({});
        res.status(200).json(product)
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

const getProduct = async (req,res)=>{
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product)
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

const postProducts = async (req,res)=>{
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch(error){
        res.status(500).json({ message: error.message });
    }
}

const updateProducts = async (req,res)=>{
    try {
        const {id}=req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);

        if(!product){
            return res.status(404).json({message: "404 not founded"});
        }

        const updateProduct = await Product.findById(id);
        res.status(200).json(updateProduct);
    }
    catch (error){
        res.status(500).json({ message: error.message });
    }
}

const deleteProducts = async (req,res)=>{
    try{
        const {id}= req.params;
        const product = await Product.findByIdAndDelete(id);

        if(!product){
            res.status(404).json({message: "product not founded"})
        }

        res.status(200).json("Product deleted Successfully")

    }
    catch (error){
        res.status(500).json({ message: error.message });
    }
}


module.exports={
    getProducts,
    getProduct,
    postProducts,
    updateProducts,
    deleteProducts
}