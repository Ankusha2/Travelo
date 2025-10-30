import React from 'react';
import Navbar from './Components/Navbar';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import Section4 from './Components/Section4';
import Section5 from './Components/Section5';
import Section6 from './Components/Section6';
import Section7 from './Components/Section7';
import Section8 from './Components/Section8';
import Footer from './Components/Footer';
import Section9 from './Components/Section9';
import ShimmerUI from './ShimmerUI';
// import Button from './Components/UI/Button';

function App() {
  return (
    <div>
      {/* <ShimmerUI/> */}
     <Navbar/>
     {/* <Section1/> */}
     <Section2/>
    <Section5/>
    <Section4/>
     <Section3/>
     <Section6/>
     <Section7/>
       <Section9/>
     <Section8/>
   
     <Footer/>
     
     
     {/* <Button text="submit"/>
     <Button text="Add to cart"/>
     <Button text="OK"/> */}
    </div>
  );
}

export default App;
