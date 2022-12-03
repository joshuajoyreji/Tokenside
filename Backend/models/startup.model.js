const mongoose = require('mongoose');

const startupSchema = new mongoose.Schema({
    name:String,
    description:String,
    funding:Number,
    tokenName:String,
    tokenCount:Number,
    tokenVal:Number
})

const Startup = new mongoose.model("startups",startupSchema);

module.exports = Startup;