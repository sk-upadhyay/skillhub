import React from 'react'
import './Navbar.css';
import {AiOutlineSearch} from 'react-icons/ai';
import {FaBars,FaTimes} from 'react-icons/fa';
import logo from './Logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <input type="checkbox" id="check"/>
      <nav>
<div className="icon">
    <Link to ='/'><img src={logo}/></Link></div>
<div className="search_box">
<input type="search" placeholder="Search here"/>
<AiOutlineSearch className="search"/>
</div>
<ul>
<li><Link to='/calendar'>Calendar</Link></li>
<li><Link to="/signin">Log In</Link></li>
<li><Link to="/signup">Sign Up</Link></li>
</ul>
<label for ="check" className="bar">
<FaBars id ="bars"/>
<FaTimes id="times"/>
</label>
</nav>
    </div>
  )
}

export default Navbar
