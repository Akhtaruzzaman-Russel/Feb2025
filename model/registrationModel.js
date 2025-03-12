const mongoose = require("mongoose");
const { Schema} = mongoose 

const registrationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    // password: {
    //     type: String,
    //     required: true
    // },
    // phoneNumber: {
    //     type: String,
    //     required: true
    // },
    // address: {
    //     type: String,
    //     required: true
    // },
    // dateOfBirth: {
    //     type: Date,
    //     required: true
    // },
    // role: {
    //     type: String,
    //     enum: ['user', 'admin'],
    //     default: 'user'
    // }
})


module.exports = mongoose.model("User", registrationSchema)