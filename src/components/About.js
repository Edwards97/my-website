import React from 'react';

import '../CSS/About.css';

function About() {
  return (
    <div className="About">
      <h1>About</h1>
      <ul>
        <li className="about-class"><i className="fas fa-graduation-cap"></i> <h3> Education/Credentials </h3> </li>
          <ul>
            <li><p className="title"> University of South Carolina</p> </li>
            <li><p className="description"> Bachelor of Science - Computer Science, 3.59 GPA <br></br>
                    2016 - 2020 </p> </li>       
          </ul>
        
        <li className="about-class"><i className="fas fa-briefcase"></i><h3> Experience</h3></li>
          <ul>
            <li><p className="title"> Specialist, Technology Support I</p></li>
            <li><p className="description"> Oct 2020 - Present, Columbia SC Metropolitan Area <br></br>
                    Working at the Technology Support Center of Blue Cross Blue Shield in South Carolina.</p></li> 
          </ul>
        <li className="about-class"><i className="fas fa-laptop-code"></i><h3> Skills</h3></li>
        <li className="about-class"><i className="fab fa-d-and-d"></i><h3> Interests</h3></li>
          

      </ul>
    </div> //App
  );
}

export default About;
