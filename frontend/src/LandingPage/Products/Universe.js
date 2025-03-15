import React from 'react';

function Universe() {
    return ( 
        <div className='container p-3 text-center'>
            <div className='row'>
                <h1 className='text-center'>The zerodha Universe</h1>
                <p className='text-center mt-1'>Extend your trading and investment experience even further with our
                partner platforms</p>
                <div className='row '>
                <div className='col p-3 mt-3'>
                    <img src='assets/smallcaseLogo (1).png'/>
                    <p className="text-small text-muted">Thematic investment platform</p>
                </div>
                <div className='col p-3 mt-3'>
                    <img src='assets/streakLogo (1).png' style={{width:"40%"}}/>
                    <p className="text-small text-muted">Thematic investment platform</p>
                </div>
                <div className='col p-3 mt-3'>
                    <img src='assets/zerodhaFundhouse.png' style={{width:"40%"}}/>
                    <p className="text-small text-muted">Thematic investment platform</p>
                </div>
                </div>
                <div className='row mt-3'>
                <div className='col p-3 mt-3'>
                    <img src='assets/sensibullLogo.svg' style={{width:"50%"}}/>
                    <p className="text-small text-muted">Thematic investment platform</p>
                </div>
                <div className='col p-3 mt-3'>
                    <img src='assets/goldenpiLogo (1).png'/>
                    <p className="text-small text-muted">Thematic investment platform</p>
                </div>
                <div className='col p-3 mt-3'>
                    <img src='assets/dittoLogo (1).png' style={{width:"30%"}}/>
                    <p className="text-small text-muted">Thematic investment platform</p>
                </div>
                </div>
            </div>
            <button className='mt-5 p-3 btn btn-primary fs-5' style={{width:"20%", margin:"0 auto"}}>Signup Now</button>
        </div>
     );
}

export default Universe;