const mongoose = require('./connection.js')


const User = new mongoose.Schema({
    name:{
        type: String,
        required: true
    }, 

    city: {
        type: String,
        required: true
    },

    state:{
        type: String,
        required: true
    }, 

    email: {
        type: String,
        required: true
    },

    accountBalance: Number
})



module.exports =mongoose.model('User', User)