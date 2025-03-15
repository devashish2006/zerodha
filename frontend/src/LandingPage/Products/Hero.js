import React from 'react';

function Hero() {
    return (
        <div className='container p-3 border-bottom mb-5'>
            <div className='row'>
                <h1 className='text-center mt-5' >Technology</h1>
                <p className='fs-4 text-muted text-center fw-medium' >Sleek, modern and intutive trading platforms</p>
                <p className='fs-5 text-muted text-center ' >Check out our 
                <a href='' className='fs-5' style={{textDecoration:"None"}}> investment offerings <i class="fa-solid fa-arrow-right "></i></a></p>
            </div>
        </div>
    );
}

export default Hero;