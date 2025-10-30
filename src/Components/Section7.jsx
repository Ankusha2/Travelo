import React from 'react';
import style from '/src/styles/Section7.module.css';
import {section7data} from '/src/data.js';

const Section7 = () => {
    // console.log(section7data)
  return (
    <>
     <div className={style.cont}>
        {section7data.map((elem,id)=>{
            return(
                <div key={id} className={style.inner}>
                    <i className={elem.icon}></i>
                    <h4>{elem.heading}</h4>
                    <p>{elem.desc}</p>
                </div>
            )
        })}
        
        </div> 
    </>
  );
}

export default Section7;
