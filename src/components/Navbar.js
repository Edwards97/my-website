import React from 'react';
import navbarImage from '../images/Navbar image.png';
import '../CSS/App.css';
import {Link} from 'react-router-dom';


//change from buttons to ul
function Navbar() {
  return (
    <nav>
      <div className="nav-links">
        <ul>
          <li><img className="navbarImg" src={navbarImage} alt="Error" /></li>
          <li><Link to ='/'>Home</Link></li>
          <li><Link to = '/about'>About</Link></li>
          <li><Link to = '/contact'>Contact</Link></li>
          <li><Link to = '/projects'>Projects</Link></li>
        </ul>
      </div>

      <div className="clr"></div>
    </nav>
   
  );
}

export default Navbar;