import React from 'react';

const Cards = (props) => {
  return  (<div style={{ margin: `50px`, display: `flex`, flexDirection: `row`, justifyContent: `center` }}>
    <>
    <div className='cards'>
        <h1>{props.title1}</h1>
        <br/>
        <img src={props.imgSource} alt="Service1" style={{ height: `380px`, width:'600px' }} />
        <br/><br></br><br></br>
        <h3><p>{props.desc}</p></h3>
    </div>
    </>
    </div>
  )
}

export default Cards;


