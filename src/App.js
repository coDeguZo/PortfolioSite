import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import {Image} from 'semantic-ui-react'
import Nav from './Components/Nav'
import HomeInformation from './Containers/HomeInformation';
import About from './Components/About'
import Resume from './Containers/Resume'
import Contact from './Containers/Contact'

function App() {

  return (
    <div className="App">
      <br /><br />
      <Nav />
      <Switch>
        <Route exact path="/" render={() => <HomeInformation />}/>
        <Route exact path="/about" render={() => <About />}/>
        <Route exact path="/resume" render={() => <Resume /> }/>
        <Route exact path="/contact" render={() => <Contact />} />
      </Switch>
    </div>
  );
}

export default App;
