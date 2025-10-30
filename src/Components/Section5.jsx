import React from 'react';
import '/src/styles/Section5.css';
import { section5data } from '../data';
import Button from './UI/Button';

const Section5 = () => {    
        console.log(section5data)
  return (
    <>
      <div className="section32">
        <div className='section312'>
        <div className='text2'>
            <h2>{section5data.heading.title}</h2> 
            <p>{section5data.heading.description}</p>  
        </div>
        </div>
        <div className='section322'>
            {section5data.card.map((elem,idx)=>{
                return(
                     <div key={idx} className='card2' style={{backgroundImage:`url(${elem.img})`}}>
                        <div className='content2'>
                            <div className='name2'>
                                <h6>{elem.state}</h6>
                                <button>{elem.text}</button>
                            </div>
                        </div>
                    </div> 
                )
            })}
        </div>  
     </div> 
    </>
  );
}

export default Section5;
