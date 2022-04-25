
// const users = require('../Modal/user.modal')
const usersModal = require('../Models/userModal');
const fixedAcModal = require('../Models/fixedAccount');
const savingAcModal =  require('../Models/savingAccount')
const express=require('express');
const app= express();

const createUser = async (req, res, next)=>{
    try {
        let userDetails = req.body;
        let response=await usersModal.insertMany([userDetails]);
        res.json(response)
        console.log('user created')
    } catch (error) {
        console.log('err createUser : ', error)
    }
}
const createSavingAcc =(req, res, next)=>{
    try{
        let accountDet=req.body
        let response = await savingAcModal.insertMany([accountDet]);
        res.json(response);
    }
    catch(er){
        console.log('create ac ', er)
    }

}
const createFixedAcc =(req, res, next)=>{
    try{
        let accountDet=req.body
        let response = await fixedAcModal.insertMany([accountDet]);
        res.json(response);
    }
    catch(er){
        console.log('create ac ', er)
    }
}
const getUser= async (req, res, next)=>{
    try {
        // let userDetails = req.body;
        let response=await usersModal.find({});
        res.json(response)
    } catch (error) {
        console.log('err createUser : ', error)
    }
}

module.exports={
    createUser,
    getUser,
    createSavingAcc,
    createFixedAcc,
}
