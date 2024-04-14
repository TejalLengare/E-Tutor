import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Css/Contact.css';
const Contact = () => {
  return (
    <>
<h1>Contact Us</h1>
<form className='contact'>
  <div>
    <label htmlFor='name'>Name</label>
    <input type="text" placeholder='Enter Your Name'/>
  </div>

  <div>
    <label htmlFor='email'>Email</label>
    <input type="email" placeholder='Enter Your Email'/>
  </div>

  <div>
    <label htmlFor='password'>Password</label>
    <input type="password" placeholder='Enter Your Password'/>
  </div>

  <div>
    <label htmlFor='mobileno'>Mobile No</label>
    <input type="mobileno" placeholder='Enter Your Mobile No'/>
  </div>

  <div>
    <label htmlFor='name'>Name</label>
    <input type="text" placeholder='Enter Your Name'/>
  </div>
  <div className='btnBox'>
      <div className='btn'>
      <NavLink to='/'
      className="readMore"
      activeClassName="activeitem" >Submit Details
      </NavLink>
      </div>
    </div>
</form>
    </>
  )
}

export default Contact;
