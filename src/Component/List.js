
import React from 'react';
import logo from '../Images/logo.png';
import { NavLink } from 'react-router-dom';
// import SearchIcon from '@material-ui/icons/Search';
// import PersonIcon from '@material-ui/icons/Person';
// import CallIcon from '@material-ui/icons/Call';
import '../Css/List.css';
const List = () => {
  return (
    <>
  <header>
    <div className='container container-flex'>
        <div className='logoContainer '>
            <img src={logo}  alt="logo" className='logo' width={170} height={100} />
        </div>

        <nav>
            <div className='list'>
                <NavLink exact to='/' 
                className="listItem"
                activeClassName="activeitem">Home</NavLink>

                <NavLink to='/About' 
                className="listItem"
                activeClassName="activeitem" >About</NavLink>

                <NavLink to='/Contact' 
                className="listItem" 
                activeClassName="activeitem">Contact</NavLink>

                <NavLink to='/Services'
                className="listItem"
                activeClassName="activeitem">Services</NavLink>
            </div>
        </nav>  

        {/* <div className='icons'>
          <SearchIcon/>
          <CallIcon/>
          <PersonIcon/>

        </div> */}
    </div>
  </header>
    </>
  )
}
export default List;
