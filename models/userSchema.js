const { boolean } = require("joi");
const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true

    },
    email:{
        type:String,
        require:true,
        unique:true

    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
}  

);
const User = mongoose.model("user", userSchema);
module.exports= User;