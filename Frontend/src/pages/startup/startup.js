import React, { useState, useEffect } from 'react'
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import './startup.css'
import { Button } from 'reactstrap';
import oncolyze from './oncolyze.jpeg'
import { useParams } from 'react-router-dom';
import { Input } from 'reactstrap'

const baseURL = "http://localhost:8000/api"

const Startup = () => {
  async function buyToken (){
    await axios.put(`${baseURL}/purchase/${localStorage.getItem("userId")}`,{
      tokenName:startData[id]?.name,
      numofToken:data.numofToken
    }).then((response)=>{
      console.log(response.data)
    })
  } 

  let { id } = useParams();

  const[data,updateData] = useState({
  })

  const [startData, setData] = useState({});
  useEffect(()=>{
   fetchData();
  },[])

  async function fetchData(){
   await axios.get(`${baseURL}/startup`).then((response)=>{
     setData(response.data);
     console.log(id)
  });
 }


  return (
    <div className='whole'>
      <div className='container'>
        <img src={oncolyze} alt='oncolyze' className='image'/>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-7'>
            <h5 className='content'>
            {startData[id]?.description}
            </h5>
          </div>
          <div className='col-5'>
            <div className='offset-1'>
              <h5 className='rhs'>
              Amount to Raise : {startData[id]?.funding}
                <br/>
                <br/>
                Total tokens : {startData[id]?.tokenCount}
              </h5>
            </div>
            <br/>
            <div class="col-8 offset-2">
                    <div class="card">
                        <div class="card-body">
                            <dl class="row">
                            <dt class="col-6">Token price</dt>
                            <dd class="col-6">:{startData[id]?.tokenVal}</dd>
                            <dt class="col-6">No of tokens:</dt>
                            <dd class="col-6"><Input id="test" type="Text"/></dd>
                            <Button className='buy col-4 offset-4' onClick={()=>{updateData({"numofToken":document.getElementById("test").value});console.log(data); buyToken ()}}>Buy Now</Button>
                            </dl>
                        </div>
                    </div>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Startup
