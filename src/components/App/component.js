import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './component.css';

import Cart from './../Cart/component';

import DashBoard from './../Dashboard/component';
import CategoryDetails from './../CategoryDetails/component';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <div className="App-title animated zoomIn">
              <Link to="/">
                <h2>CLOTHES ON FIRE</h2>
              </Link>
            </div>
            <Cart />
          </div>
          <Route exact path="/" component={DashBoard} />
          <Route exact path="/category/:id" component={CategoryDetails} />
        </div>
      </Router>
    );
  }
}

export default App;
