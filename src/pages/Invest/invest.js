import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './invest.css';

const Invest = () => {

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
                <div className='startup col-8'>
                  <h4>TASL</h4>
                  Mobile app-based platform that rewards and gamifies safe driving behaviour
                </div>
                <a href='/startup' className='st'>
                <div className='startup col-8'>
                  <h4>Oncolyze</h4>
                  Biotech company aiming to treat cancer by exploding cancer cells
                </div></a>
              </div>
          </div>
          <div className='row'>
            
          </div>
        </div>
    </div>
  )
}

export default Invest;
