import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import AboutMe from "./pages/AboutMe"
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Jumbotron from "./components/Jumbotron"

function App() {
  return (
      <Router>
      <div>
        <Jumbotron />
        <Navbar />
        <br></br>
        <Switch>
          <Route exact path="/" component={AboutMe} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
      </Router>
    )
}

export default App;
