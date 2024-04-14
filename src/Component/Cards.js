import React from 'react';

const Cards = (props) => {
  return (
    <>
    <div className='cards'>
        <h2>{props.title1}</h2>
        <img src={props.imgSrc} alt="Service1" />
        <p>{props.desc}</p>
  </div>
    </>
  )
}

export default Cards;