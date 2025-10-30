import React from 'react';
import style from '/src/styles/Footer.module.css';
import {footerData} from '/src/data.js';

const Footer = () => {
  // console.log(footerData)
  return (
    <div className={style.main1}>
     <div className={style.main}>
      <div className={style.one}>
        <h5>{footerData.title}</h5>
        <p>{footerData.description}</p>
        {/* <p>Lorem ipsum dolor sit.</p> */}
      </div>      
      <div className={style.one} >
        <h5>{footerData.company.title}</h5>   
        {footerData.company.links.map((elem,id)=>{
          return(<li type='none' key={id}><a href={elem.url}>{elem.label}</a></li>)
        })}   
      </div>      
      <div className={style.one} id={style.one1}>
        <h5>{footerData.destination.title}</h5>    
        <div className={style.destinationlinks}>
          <ul>
            {footerData.destination.links.map((elem,id)=>{
              return(<li type='none'key={id}><a href={elem.url}>{elem.label}</a></li>)
              })}  
          </ul>  
          </div>
        </div>      
      <div className={style.one} id={style.one4}>
        <h5>{footerData.insta.title}</h5>
         {footerData.insta.links.map((elem,id)=>{
          return(<img key={id} src={elem.url} alt={elem.alt} />)
        })}  
      </div>      
      </div> 
      <hr />
      <div className={style.main2}>
          <p>{footerData.copy}</p>
      </div>
    </div>
  );
}

export default Footer;
