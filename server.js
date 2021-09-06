const express = require("express");
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json")  //ecommerce-website-5ae1c-firebase-adminsdk-55len-0da12c4758.json



admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });

const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const users = require('./routes/users');
const categories = require('./routes/categories');
const products = require('./routes/products');



app.use(bodyParser.json());
const db = require('./config/keys').mongoURI;

mongoose.connect(db,{useNewUrlParser:true,
  useFindAndModify:false,useCreateIndex:true })//
      .then(()=>console.log('Mongo db database connected'))
      .catch(err=>console.log(err));


app.use('/users',users);
app.use('/categories',categories);
app.use('/products', products);


app.use(express.static('Images'));

const port = process.env.port || 5000;

app.listen(port,()=>console.log(`Servernpm audit started on port ${port}`));


