const mongoose =require('mongoose')

const userschema=mongoose.Schema( {
    name :{
        type :String,
        required : true
    },
    email :{
        type :String,
        required : true
    },
    password :{
        type :String,
        required : true
    },
    date :{
        type :String,
        default :Date.now
    }

});

const model =mongoose.model('user',userschema)

module.exports =model;