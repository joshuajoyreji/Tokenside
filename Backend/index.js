require("dotenv").config();
const express = require('express');
const app = express();
const cors=require('cors');
const port = process.env.PORT;
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());
const mongoose = require("mongoose");
const Users = require("./models/user.model");
const Startup = require("./models/startup.model");
mongoose.connect("mongodb+srv://arg007:Freelancer%402022@cluster0.gp52g.mongodb.net/winterhack?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>console.log("connection is successfully done")).catch((error)=>console.log("error hai" + error.message))

app.get("/api/signup",async (req,res)=>{
    const data = await Users.find();
    res.status(201).json(data);
})

app.post("/api/signup",async (req,res)=>{
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;
    const tokens = [];
    const user = new Users({name,username,password,tokens});
    const storeData = await user.save();
    res.status(201).json(storeData);
})

app.post("/api/signin",async(req,res)=>{
    var username = req.body.username;
    var password = req.body.password;
    var user = await Users.find({"username":username})
    console.log(user);
    if (user[0].password==password){
        res.status(201).json({"message":"authorised","token":"xxx","data":user});
    }
    else{
        res.status(401).json({"messge":"unauthorised"})
    }  
})

app.get("/api/startup",async(req,res)=>{
    const data = await Startup.find();
    res.status(201).json(data);
})

app.post("/api/startup",async(req,res)=>{
    const name = req.body.name;
    const description = req.body.description;
    const funding = req.body.funding;
    const tokenName = name
    const tokenVal = 100;
    const tokenCount = funding/100;
    const startup = new Startup({name,description,funding,tokenCount,tokenVal})
    const storeData = await startup.save();
    res.status(201).json(storeData); 
})

app.get("/api/purchase/:id",async(req,res)=>{
    const id = req.params.id;
    const user = await Users.find({"__id":id})
    res.status(201).json(user)
})

app.put("/api/purchase/:id",async(req,res)=>{
    const id = req.params.id;
    const tokenName = req.body.tokenName;
    const numofToken = req.body.numofToken;
    const user = await Users.find({"__id":id});
    console.log(user[0].tokens.find(o=>o.name==tokenName));
    if(user[0].tokens.find(o=>o.name==tokenName)==undefined){
        user[0].tokens.push({'name':tokenName,"numofToken":numofToken});
        console.log(user[0].tokens)
    }
    else{
        var l = user[0].tokens.indexOf(user[0].tokens.find(o=>o.name==tokenName))
        user[0].tokens[l].numofToken += numofToken; 
       
    }
    await Users.findByIdAndUpdate(id,{"tokens":user[0].tokens});
    res.status(200).json({"message":"updated"});


})

app.listen(8000, () => { 
console.log(`Server running on ${port}...`)
})