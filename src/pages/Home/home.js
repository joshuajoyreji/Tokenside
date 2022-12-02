import React from 'react';
import Createbutton from '../../components/createbutton/createbutton.js';
import 'bootstrap/dist/css/bootstrap.css';

function Home(){
    return(
        <div className='container'>
            <div className='row'>
                <h3>Do you have an idea for startup?</h3>
            </div>
            <div className='row'>
                <Createbutton />
            </div>
        </div>
    )
}

export default Home;