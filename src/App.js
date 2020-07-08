import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Nav from './Components/layout/Nav'
import Home from './Components/pages/Home'
import About from './Components/pages/About'
import Projects from './Components/pages/Projects'
import Skills from './Components/pages/Skills'
import Blog from './Components/pages/Blog'
import Resume from './Components/pages/Resume'
import Contact from './Components/pages/Contact'

function App() {

  return (
    <div className="App">
      <Nav />
      <Switch>
        {/* <Route exact path="/" render={() => <HomeInformation />}/> */}
        <Route exact path="/" render={() => <Home />}/>
        <Route exact path="/about" render={() => <About /> }/>
        <Route exact path="/projects" render={() => <Projects />}/>
        <Route exact path="/skills" render={() => <Skills />}/>
        <Route exact path="/blog" render={() => <Blog />}/>
        <Route exact path="/resume" render={() => <Resume />}/>
        <Route exact path="/contact" render={() => <Contact />} />
      </Switch>
    </div>
  );
}

export default App;
