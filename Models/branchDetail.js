const mongoose=require('mongoose');

const branchDetails =new mongoose.Schema({
  
    "name": { type : String, required: true},
    "address": {type:String},
    "IFSC": { type : String, required: true},
    "MICR": { type : String, required: true}, 
    "createdAt": {type : String, required: true},
    "updatedAt":  { type : String, required: true},

})
module.exports= mongoose.model('branchDetails',branchDetails);
