const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Schema of Single User
 const UserSchema = new Schema({
            ufd : { type : String , unique : true, required: true  },
            username: { type: String },
            email: { type: String, unique: true },
            recentlyViewed : [{ productId : { type : String}, productImage : { type : String } , price: { type : Number }}]
            // password: {type: String},
            //is_active: { type: Boolean, default: false }
        })

        User = mongoose.model('user' , UserSchema);

module.exports = {
    User: User,
    UserSchema: UserSchema
}