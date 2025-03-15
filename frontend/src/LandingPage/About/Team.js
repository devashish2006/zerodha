import React from 'react';

function Team() {
    return (
        <div className='container p-5'>
            <div className='row text-center mt-5 border-top p-3'>
            <h1 className=' fs-1'>People</h1>
            </div>

        

            <div className='row text-muted p-3 fs-5 ' >
                <div className='col p-3 text-center'>
                <img src='..\..\Assets\nithinKamath (1).jpg' style={{borderRadius:"100%", width:"50%"}}/>
                <br></br><br></br>
                <h3 >Nithin Kamath</h3>
                <h5 >Founder, CEO</h5>
                </div>
                <div className='col p-3 fs-5'>
                <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a style={{textDecoration:"None"}} href="">Homepage</a> / <a style={{textDecoration:"None"}} href="">TradingQnA</a> /{" "}
            <a style={{textDecoration:"None"}} href="">Twitter</a>
          </p>
                </div>
            </div>
        </div>
    );
}

export default Team;