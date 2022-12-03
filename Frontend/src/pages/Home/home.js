import React from 'react';
import Createbutton from '../../components/createbutton/createbutton.js';
import 'bootstrap/dist/css/bootstrap.css';
import './home.css';
import Startinvbutton from '../../components/startinvbutton/startinvbutton.js';
function Home(){
    return(
        <div className='Whole'>
        <div className='container heading '>
            <div className='row row-header '>
                <div className='col-6 offset-4'>
                    <h3>Do you have an idea for startup?</h3>
                </div>
                
            </div>
            <div className='row'>
                <div className='offset-6'>
                    <a href='/createstartup'>
                    <Createbutton />
                    </a>
                    
                </div>
                
            </div>
        </div>
        <div className='container bod'>
            <div className='row'>
                <div className='col-5'>
                    <h3>A platform where anyone can invest on a startup</h3>
                </div>
            </div>
            <br/>
            <div className='row'>
                <div className='col-5 offset-1 fnt'>
                    <p>Our platform provides an opportunity to anyone who is intereseted in invensting in startups</p>
                </div>
            </div>
            <div className='row'>
                <div className='offset-1'>
                <a href='/invest'>
                    <Startinvbutton />
                </a>
                </div>
                
            </div>
                
        </div>
        </div>
    )
}

export default Home