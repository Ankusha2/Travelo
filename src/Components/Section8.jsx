import React from 'react';
import style from '/src/styles/Section8.module.css';
import { section8data } from '../data';

const Section8 = () => {
console.log(section8data)
  return (
    <>
     <div className={style.one}>
        <h2>Recent Trips</h2>
        <div className={style.two}>
        {section8data.map((elem,id)=>{
            return( <div key={id} className={style.card1}>
            <div> <img src={elem.img} alt={elem.alt} /></div>  
            <div> 
                <p>{elem.date}</p>
                <h4>{elem.data}</h4>            
            </div>          
        </div>   
        )})}
            </div>
    </div> 
    </>
  );
}

export default Section8;
