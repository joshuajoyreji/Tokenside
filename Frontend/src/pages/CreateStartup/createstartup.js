import React, { useState } from 'react'
import axios from "axios";
import { Input } from 'reactstrap'
import './createstartup.css'

const baseURL = "http://localhost:8000/api"

const create = () => {
  
  const [logdata,setData] = useState({
    name:"",
    description:"",
    funding:""
})


const addData = (e)=>{
    // console.log(e.target);
    const {name,value} = e.target;
    setData(()=>{
        return{
            ...logdata,
            [name]:value
        }
            
    })
}

async function signup(){
  await axios
      .post(`${baseURL}/startup`, {
        name: logdata.name,
        description: logdata.description,
        funding: logdata.funding
      })
      .then((response) => {
        console.log(response.data);
        //window.location.href = "/";
      });
}


  return (
    <div>
    <div class="login-wrapper">
    <form action="" class="form">
      <h2>Create your startup</h2>
      <div class="input-group">
        <input type="text" name="name" id="loginUser" onChange={addData} value={logdata.name} />
        <label for="User">Startup Name</label>
      </div>
      <div class="input-group">
        <input type="text" name="description" id="loginUser" onChange={addData} value={logdata.description} />
        <label for="loginUser">Description</label>
      </div>
      <div class="input-group">
        <input type="text" name="funding" id="loginUser" onChange={addData} value={logdata.funding} />
        <label for="loginUser">Funding</label>
      </div>
<Input type="submit" value="Create" class="submit-btn" onClick={(e)=>{e.preventDefault();
console.log(logdata);
create()}}/>
    </form>
  </div>
    </div>
  )
}

export default create
