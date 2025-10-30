import React from 'react';
import Button from './UI/Button';
import '/src/styles/Section4.css';

const Section4 = () => {
  return (
    <>
      <div className='one'>
        <div id='content4'>
            <div id='data'>
                <h4>Subscribe Our Newsletter</h4>
                <p>Subscribe newsletter to get offers and about new places to discover</p>
            </div>
            <div className='form2'>
                <form>
                    <input type="text" name="" id="" placeholder='Your mail'/>
                    <Button text="Subscribe"/>
                </form>
            </div>
        </div>
      </div>
    </>
  );
}

export default Section4;
