import React from 'react';
import Products from './Products';

function Home() {
    return (
        <div className='hero'>
            <div className="container mt-3 pt-5 pb-5" style={{backgroundColor: "lightpink", color:"white"}}>
                <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                <p className="card-text lead fs-2">
                    CHECK OUT ALL THE TRENDS
                </p>
            </div>
            <Products />
        </div>
    )
}

export default Home;


<div className="container">
<h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
<p className="card-text lead fs-2">
    CHECK OUT ALL THE TRENDS
</p>
</div>