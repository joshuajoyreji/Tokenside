import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './startup.css'
import { Button } from 'reactstrap';

const Startup = () => {
  return (
    <div className='whole'>
      <div className='container'>
        <div className='row'>
          <div className='col-7'>
            <h5 className='content'>

Oncolyze is offering securities through the use of an Offering Statement that has been qualified by the Securities and Exchange Commission under Tier II of Regulation A. A copy of the Final Offering Circular that forms a part of the Offering Statement may be obtained both here and below. This profile may contain forward-looking statements and information relating to, among other things, the company, its business plan and strategy, and its industry. These statements reflect management's current views with respect to future events based on information currently available and are subject to risks and uncertainties that could cause the company's actual results to differ materially. Investors are cautioned not to place undue reliance on these forward-looking statements as they are meant for illustrative purposes and they do not represent guarantees of future results, levels of activity, performance, or achievements, all of which cannot be made. Moreover, no person nor any other person or entity assumes responsibility for the accuracy and completeness of forward-looking statements, and is under no duty to update any such statements to conform them to actual results.

            </h5>
          </div>
          <div className='col-5'>
            <div className='offset-1'>
              <h5 className='rhs'>
                Valuation Price : 5,000,000
                <br/>
                <br/>
                Total tokens    : 10000
              </h5>
            </div>
            <br/>
            <div class="col-8 offset-2">
                    <div class="card">
                        <div class="card-body">
                            <dl class="row">
                                <dt class="col-6">Token price</dt>
                                <dd class="col-6">:5000</dd>
                                <dt class="col-6">No of tokens</dt>
                                <dd class="col-6">:00</dd>
                                <Button className='buy col-4 offset-4'>Buy Now</Button>
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
