import React from 'react';

function Pricing() {
    return ( 
        <div className='container mt-5 p-3'>
            <div className='row'>
                <div className='col-4'>
                    <h1>Unbetaible Pricing</h1>
                    <p> We pioneered the concept of discount broking and price transparency
                    in India. Flat fees and no hidden charges.</p>
                    <a href='' className='mx-5' style={{textDecoration:"None"}}>See Pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='row'>
                        <div className='col border p-3'>
                            <h1>₹0</h1>
                        Free equity delivery and
                         <br />
                        direct mutual funds
                        </div>
                        <div className='col border p-3'>
                            <h1>₹20</h1>
                        <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;