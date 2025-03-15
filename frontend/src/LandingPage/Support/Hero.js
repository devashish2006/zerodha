import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid' id="TicketHero">
            <div className='p-5 ' id="supportWrapper" style={{marginLeft:"200px"}}>
                <h3 className=''>Support Portal</h3>
                <a href='' style={{marginRight:"300px"}}>Track Tickets</a>
            </div>
            <div className='row p-5 '>
                <div className='col-6  '>
                    <h3 className='fs-3 ' style={{marginLeft:"160px"}}>Search for an answer or browse help topics to create a ticket</h3>
                    <input style={{marginLeft:"160px", marginTop:"30px", marginBottom:"30px", width:"450px", height:"100px", borderRadius:"10px"}} placeholder='Eg. how do I activate F&O, why is my order getting rejected'/><br></br>
                    <a href="" style={{marginLeft:"45px"}}>Track account opening </a>
                    <a href="" style={{marginLeft:"45px"}}>Track segment activation </a>
                    <a href="" style={{marginLeft:"45px"}}>Intraday margins </a>
                    <a href="" style={{marginLeft:"61px"}}>Kite user manual </a>   
                </div>
                <div className='col-6 p-3 '>
                <h1 className="fs-3" >Featured</h1>
                <ol className=''>
                    <li className='p-2'>
                    <a href="">Current Takeovers and Delisting - January 2024</a>
                    </li>
                    <li className='p-2'>
                    <a href="">Latest Intraday leverages - MIS & CO</a>
                    </li>
                </ol>
                </div>
            </div>
        </section>
     );
}

export default Hero;