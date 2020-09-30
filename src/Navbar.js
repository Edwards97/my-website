import React from 'react';
import navbarImage from './images/Navbar image.png';
import './App.css';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="nav-links">
        <img className="navbarImg" src={navbarImage} alt="Error" width="150"/>
        <div className="nav-items">
          <Link to='/'>
              <button>Home</button>
          </Link>
        </div>
        <div className="nav-items">
          <Link to ='/about'>
              <button>About</button>   
          </Link>
        </div>
        <div className="nav-items">  
          <Link to='/contact'>
              <button>Contact</button>
          </Link>
        </div>
        <div className="nav-items">
          <Link to='/projects'>
              <button>Projects</button>
          </Link>
        </div>
      </div>
        <div class="clr"></div>
    </nav>
   
  );
}

export default Navbar;