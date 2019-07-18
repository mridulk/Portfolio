import React, { Component } from 'react'
import Header from './component/header/Header'
import Home from './component/home/Home.js'
import About from './component/about/About.js'
import Projects from './component/projects/Projects.js'
import Contacts from  './component/contacts/Contacts.js'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css'
class App extends Component {
  render() {
    return (
      <div className="App" >
        <Router>
        <Header />
        <div className="icon-bar">
          <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
          <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
          <a href="#" className="google"><i className="fa fa-google"></i></a>
          <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
          <a href="https://github.com/mridulk" className="github"><i className="fa fa-github"></i></a>
        </div>
        <div className="content">
          <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/contacts" component={Contacts}/>
          </Switch>
        </div>
        </Router>


      </div>
    )
  }
}

export default App

