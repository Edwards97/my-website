import React from 'react';
import '../CSS/App.css';

function Footer() {
  return (
    <footer id="main-footer">
      <a href="https://github.com/Edwards97" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/steven-edwards-7951801a4/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>
      </a>
        <p>
            <em>Steven Edwards</em> &copy;2020
        </p>
    </footer>
  );
}

export default Footer;