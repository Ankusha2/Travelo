import React from 'react';
import { section1data } from '../data';
import './../styles/Section1.css';

function Section1() {
    // console.log(section1data)
  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
            {section1data.map((elem,idx)=>{
                return(
                    <div key={idx} className="carousel-item active">
                        <img src={elem.image} className="d-block w-100" alt={elem.alt}/>
                        <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100" id='caption'>
                            <h1>{elem.title}</h1>
                            <p>{elem.description}</p>
                            <button>Explore Now</button>
                        </div>
                    </div>
                )
            })}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev" id='pre-next-control'>
            <span className="carousel-control-prev-icon" aria-hidden="true" id='main'></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next" id='pre-next-control'>
            <span className="carousel-control-next-icon" aria-hidden="true" id='main'></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
    </div>
  );
}

export default Section1;
