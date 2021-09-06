const express = require('express');
const router = express.Router();

const CategoryImport = require('../models/Category');
const Category = CategoryImport.Category;

router.get('/popular',(req,res)=>{

    Category.find({}).sort({popularity : -1}).limit(14).then(categories => res.json(categories)).catch(error => res.json(error + "Error Fetching popular categories from db"));

})

module.exports = router ;