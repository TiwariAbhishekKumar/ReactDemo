import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './Home';
import Message from './Message';
import Counter from './Counter';
import './App.css';
class App extends Component {
  render() {
    return (
    
      <Router>
      <div>
        {/* <Message/> */}
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><a href="/Home">Home</a></li>
            <li><a href="/Message">Message</a></li>
            <li><a href="/Counter">Counter</a></li>
          </ul>

          <Route exact path="/Home" component={Home} />
         <Route path="/Message" component={Message} />
         <Route path="/Counter" component={Counter} />
     {/* <Route path="/topics" component={Contact} /> */}
          <div className="content">
             
          </div>
        </div>
        </Router>
    );
  }
}

export default App;
