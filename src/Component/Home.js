import React from 'react';
import HomeImg from '../Images/home.jpg';
import '../Css/HomeAbout.css';
import Same from './Same';
const Home = () => {
  return (
    <>
    <Same
    title="Where Algorithms Meet Aspiration"
    text="At our programming tuition service, 
    we believe in empowering individuals with the essential skills and
    knowledge to thrive in today's digital world.
    Whether you're a complete beginner or looking to advance your coding abilities, 
    our expert instructors are here to guide you every step of the way."
    imgsrc={HomeImg}
    btn="Read More"
    />
    </>
  )
}

export default Home;