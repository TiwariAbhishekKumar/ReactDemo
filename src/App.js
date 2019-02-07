import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './Home';

import './App.css';
class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
           
      //       Welcome! First react App In VS Code......
            
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
      <Router>
      <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><a href="/Home">Home</a></li>
            <li><a href="/stuff">Stuff</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>

          <Route exact path="/Home" component={Home} />
      {/* <Route path="/about" component={Stuff} />
      <Route path="/topics" component={Contact} /> */}
          <div className="content">
             
          </div>
        </div>
        </Router>
    );
  }
}

export default App;
