import React from 'react';
import './../styles/Section2.css';

function Section2() {
  return (
    <div className='go-form'>
        <h4>Where you want to go?</h4>
      <form action="">
        <input type="text" placeholder='Where to go?'/>
        <input type="date"  id="" />
        <select name="" id="">
            <option value="Travel Type">Travel Type</option>
            <option value="Solo">Solo</option>
            <option value="Group">Group</option>
        </select>
        <button>Search</button>
      </form>
    </div>
  );
}

export default Section2;
