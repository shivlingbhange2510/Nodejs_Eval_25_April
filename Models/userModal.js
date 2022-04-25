const mongoose=require('mongoose');

const user =new mongoose.Schema({
  
    "firstName": { type : String, required: true},
    "middleName": {type:String},
    "address": { type : String, required: true},
    "email": { type : String, required: true}, 
    "age": {type : String, required: true},
    "gender":  { type : String, required: true},

})
module.exports= mongoose.model('user',user);
