const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Schema of Single User
 const CategorySchema = new Schema({
            // ufd : { type : String , unique : true, required: true  },
            // username: { type: String },
            // email: { type: String, unique: true },
            // password: {type: String},
            //is_active: { type: Boolean, default: false }
            name: { type : String },
            popularity : { type: Number },
            relatedCategories : [ String ],
            numOfProducts : { type : Number},
            categoryImage : { type : String}
            
        })

        Category = mongoose.model('category' , CategorySchema);

module.exports = {
    Category : Category,
    CategorySchema: CategorySchema
}