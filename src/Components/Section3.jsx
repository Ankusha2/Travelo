import React from 'react';
import '/src/styles/Section3.css';
import { section3data } from '../data';
import Button from './UI/Button';

const Section3 = () => {
    // console.log(section3data)
  return (
    <>
     <div className="section3">
        <div className='section31'>
        <div className='text'>
            <h2>{section3data.heading.title}</h2> 
            <p>{section3data.heading.description}</p>  
        </div>
        </div>
        <div className='section32'>
            {section3data.card.map((elem,idx)=>{
                return(
                     <div key={idx} className='card'>
                        <div className='image'><img src={elem.img} alt={elem.alt} /></div>
                        <div className='content'>
                            <div className='name'>
                                <h3>{elem.state}</h3>
                                <p>{elem.country}</p>
                            </div>
                            <div className='rating'>
                                <span>                                  
                                    {/* <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i> */}

                                    {[...Array(5)].map((_,id)=>(
                                        <i key={id} className={elem.symbol}></i>
                                    ))}
                                </span>
                                <span id='clock'><i className="fa-regular fa-clock"></i> 5days</span>
                            </div>
                        </div>
                    </div> 
                )
            })}
         <Button text="More places"/> 
        </div>  
     </div> 
    </>
  );
}

export default Section3;
