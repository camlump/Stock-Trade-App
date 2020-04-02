const express = require('express')


const User = require('../models/UserModel.js')



const userRouter = express.Router()


userRouter.get('/', (req, res)=>{
    User.find().then((users)=>{
        res.json(users)
    });
});


module.exports = { userRouter }