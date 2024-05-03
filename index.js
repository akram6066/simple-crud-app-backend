const express = require ("express");
const mongoose= require("mongoose");
const Product = require('./module/productModel.js');
const productRouter = require('./router/productrouter.js')
// const product = require("./module/productModel.js");
const app =express();

// Midleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// router
app.use('/api/products', productRouter)

app.get('/',(req,res)=>{
    res.send("Hello from node api server")
})

// // Get Api All Products
// app.get('/api/products', async (req,res)=>{
//     try {
//         const product = await Product.find({});
//         res.status(200).json(product)
//     }
//     catch(error){
//         res.status(500).json({message: error.message});
//     }
// })

// // Get Api one Product By Id
// app.get('/api/products/:id', async (req,res)=>{
//     try {
//         const { id } = req.params;
//         const product = await Product.findById(id);
//         res.status(200).json(product)
//     }
//     catch(error){
//         res.status(500).json({message: error.message});
//     }
// })

// // Add Api Products
// app.post('/api/products', async (req,res)=>{
//     try{
//         const product = await Product.create(req.body);
//         res.status(200).json(product);
//     } catch(error){
//         res.status(500).json({ message: error.message });
//     }
// })

// // Update Api 
// app.put('/api/products/:id', async(req,res)=>{
//     try {
//         const {id}=req.params;
//         const product = await Product.findByIdAndUpdate(id, req.body);

//         if(!product){
//             return res.status(404).json({message: "404 not founded"});
//         }

//         const updateProduct = await Product.findById(id);
//         res.status(200).json(updateProduct);
//     }
//     catch (error){
//         res.status(500).json({ message: error.message });
//     }
// })

// // Delete Api
// app.delete('/api/products/:id', async(req,res)=>{
//     try{
//         const {id}= req.params;
//         const product = await Product.findByIdAndDelete(id);

//         if(!product){
//             res.status(404).json({message: "product not founded"})
//         }

//         res.status(200).json("Product deleted Successfully")

//     }
//     catch (error){
//         res.status(500).json({ message: error.message });
//     }
// })

mongoose.connect("mongodb+srv://zilvaboy:akram7811442@backend.vkf8xee.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=Backend")
.then(()=>{
    console.log("connected to the database");
    app.listen(3000,()=>{
        console.log(`server running on port 3000`)
    })
})
.catch(()=>{
    console.log("connection fialed")
})


