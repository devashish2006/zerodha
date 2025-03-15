import React from 'react';
import { Link } from 'react-router-dom';

function RightSection({title, description, link, image}) {
    return ( 
        <div className='container mt-5'>
            <div className='row '>
                <div className='p-5 col-6 mt-5' >
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <div>
                    <a className='fs-5' style={{textDecoration:"None"}}>{link} <i class="fa-solid fa-arrow-right "></i></a>
                    </div>
                </div>
                <div className='col-6 mb-5' >
                    <img src={image}/>
                </div>
            </div>
        </div>
     );
}

export default RightSection;