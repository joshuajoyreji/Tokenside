const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:String,
    username:String,
    password:String,
    tokens:[],
})

const Users = new mongoose.model("users",userSchema);

module.exports = Users;