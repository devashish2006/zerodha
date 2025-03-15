import React from 'react';

function Award() {
    return (
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-6'>
              <img src='..\..\Assets\largestBroker.svg'/>
            </div>
            <div className='col-6'>
              <h1>Largest stock broker in India</h1>
              <p>2+ million Zerodha clients contribute to over 15% of all retail
              order volumes in India daily by trading and investing in:</p>
              <div className='row'>
                <div className='col-6'>
                  <ul>
                    <li><p>Futures and Options</p></li>
                    <li><p>Commodity derivatives</p></li>
                    <li><p>Currency derivatives</p></li>
                  </ul>
                </div>
                <div className='col-6'>
                <ul>
                    <li><p>Stocks & IPOs</p></li>
                    <li><p>Direct mutual funds</p></li>
                    <li><p>Bonds and Govt. Securities</p></li>
                  </ul>
                </div>
                <img src='..\..\assets\pressLogos (1).png' style={{width:"90%"}}/>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Award;