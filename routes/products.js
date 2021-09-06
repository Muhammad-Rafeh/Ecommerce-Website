const express = require('express');
const router = express.Router();
require('dotenv').config();

const stripe = require("stripe")(process.env.SECRET_KEY );//(process.env.SECRET_KEY);

const ProductImport = require('../models/Product');
const Product = ProductImport.Product;

// router.get('/', (req,res) => {
//     Product.find()
// } )

router.post('/',(req,res)=>{
    Product.find({ name : { $regex : req.body.searchedItem , $options : "i" } }).limit(45).then(products => res.json(products)).catch(err => res.json("unable to search products from db"));
})

const calculateOrderAmount = async (items) => {
    console.log(items[0].id);
    const productForCalculatingPrice = await Product.findOne({_id : items[0].id});//.then(price => res.json(price)).catch(err => res.json("err getting price from db")) ;
    console.log(JSON.stringify(productForCalculatingPrice))
    const price = productForCalculatingPrice.price * items[0].quantity * 100 ;
    console.log(price);
    return price ;
  };

router.post('/buyProduct' , async (req,res) => {

    console.log("backend reached for initiating payment")

    const { items } = req.body;
    console.log(JSON.stringify(items))
    console.log(process.env.SECRET_KEY);
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: await calculateOrderAmount(items),
      currency: "usd"
    });
    console.log(JSON.stringify(paymentIntent));
    res.send({
      clientSecret: paymentIntent.client_secret
    });
})

module.exports = router ;