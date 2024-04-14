import React from 'react';
import '../Css/Service.css';
import Cards from '../Component/Cards.js';
import Data from '../Component/Data.js';

const Services = () => {
  return (
    <>
    <h1>Our Services</h1>
    <div classname='services'>
      {Data.map((values)=>{
        return(
          <Cards
          title1={values.Stitle}
          imgSource={values.imgsrc}
          desc={values.description}
          />
        )
      })}
  
    </div>
    </>
  )
}

export default Services;
