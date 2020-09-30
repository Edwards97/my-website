import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Projects from './Projects';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <div className="App">
      
        <Navbar />
        <Switch>
          <Route path='/my-website' component={Home}/>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/contact" component={Contact}/>
        </Switch>


      </div> 
    </Router>
  );
}

export default App;
