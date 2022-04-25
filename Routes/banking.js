const express = require('express');
const app= express();
const bodyParser=require('body-parser');
const bankingController = require('../Controller/banking')

app.use(bodyParser.json([]));
app.get('/',(req, res)=>{
    res.send('coonected')
})
app.get('/user', bankingController.getUser);
app.post('/user', bankingController.createUser);
app.post('/create-saving-acc', bankingController.createSavingAcc)
app.post('/create-fixed-acc', bankingController.createFixedAcc)


// modules.exports=app;
module.exports = app;