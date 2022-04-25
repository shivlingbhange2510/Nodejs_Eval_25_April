const mongoose=require('mongoose');

const savingAccount =new mongoose.Schema({
    "account_number":  { type : Number, required: true},
    "interestRate" :  { type : Number, required: true},
    "balance": { type : Number, required: true},
    "createdAt": {type : String, required: true},
    "updatedAt":  { type : String, required: true},

})
module.exports= mongoose.model('savingAccount',savingAccount);
