import React, { useState, useEffect } from 'react'
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import './invest.css';

const baseURL = "http://localhost:8000/api"

const Invest = () => {

  // const [startData, setData] = useState({
  //   name:"",
  //   description:"",
  //   funding:"",
  //   tokenCount:"",
  //   tokenVal:""
  // })  
const [startData, setData] = useState({});

 useEffect(()=>{
  fetchData();
 },[])
 async function fetchData(){
  await axios.get(`${baseURL}/startup`).then((response)=>{
    setData(response.data);
});
}

 console.log(startData)
  return (
    <div className='whole'>
        <div className='container'>
          <div className='row'>
              <div className='offset-1 col-5 fi'>
                <h3 className='fori '>For Investors</h3>
                <h4 className='items'>New Deals</h4>
                <p>Explore new startups</p>
                <h4 className='items'>Investing 101</h4>
                <p>Learn about invensting</p>
                <h4 className='items'>Need Help</h4>
                <p>Help center & FAQ</p>
              </div>
              <div className='offset-1 col-5 mp'>
                <h3>Most popular</h3>
                <p>most searched companies</p>
                <a href='/startup/0'>
                <div className='startup col-8'>
                  <h4>{startData[0]?.name} </h4>
                  {startData[0]?.description}
                </div>
                </a>
                
                <a href='/startup/1'>
                <div className='startup col-8'>
                  <h4>{startData[1]?.name}</h4>
                 {startData[1]?.description}
                </div>
                </a>
              </div>
          </div>
          <div className='row'>
            
          </div>
        </div>
    </div>
  )
}

export default Invest;

