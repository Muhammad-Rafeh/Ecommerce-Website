const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Schema of Single User
 const ProductSchema = new Schema({
            // ufd : { type : String , unique : true, required: true  },
            // username: { type: String },
            // email: { type: String, unique: true },
            // password: {type: String},
            //is_active: { type: Boolean, default: false }
            name : { type: String },
            quantity : { type : Number },
            brand : {type:String},
            price : { type : Number },
            colors : [],
            sizes : [],
            category : [{ categoryId : { type : String } , categoryName : { type : String} }],
            discount : { type : Number },
            oldPrice : { type : Number },
            newPrice : { type : Number },
            productImage : { type : String }
            
        })

        Product = mongoose.model('product' , ProductSchema);

module.exports = {
    Product : Product,
    ProductSchema: ProductSchema
}