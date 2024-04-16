const mongoose = require('mongoose');

const blogregister = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    firstname:{
        type:String,
        require:true        
    },
    surname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    auth:{
        type:String,
        default:"member"
    },
},{timestamps:true})

module.exports = mongoose.model("register",blogregister)