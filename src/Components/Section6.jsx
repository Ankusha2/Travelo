import React from 'react';
import style from '/src/styles/Section6.module.css';
import { section6data } from '../data';

const Section6 = () => {
  return (
    <div className={style.vd}>
        <h2>{section6data.heading}</h2>
      <video controls>
         <source src={section6data.src} type="video/mp4"/>
        {section6data.alt}
      </video>
    </div>
  );
}

export default Section6;
