import React from 'react';
import Same from './Same';
import aboutImg from '../Images/about1.jpg';

const About = () => {
  return (
      <>
      <Same
      title="Unlock Your Coding Potential"
      text="Our small class sizes ensure personalized attention and hands-on support, 
      allowing you to learn at your own pace and ask questions freely. Through practical exercises, 
      real-world projects, and collaborative learning environments, you'll gain the confidence and 
      expertise to tackle any coding challenge with ease."   
      
    //   "Whether you're aspiring to launch a career in software engineering, 
    //   enhance your professional skillset, or simply explore the exciting world of programming, 
    //   our tuition service is your gateway to success. Join us today and embark on a
    //   journey of discovery, innovation, and endless possibilities in the world of coding.
    // "      
      imgsrc={aboutImg}
      btn="Know More"
      />
      </>
  )
}

export default About;
