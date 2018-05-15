import React, {Component} from 'react';
import './component.css';
import {BrowserRouter as Router, Link} from 'react-router-dom';

import Cart from './../Cart/component';

import DashBoard from './../Dashboard/component';
import {Route} from 'react-router-dom';
import CategoryDetails from './../CategoryDetails/component';

class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <div className="App-header">
                        <div className="App-title animated zoomIn">
                            <h2>CLOTHES ON FIRE</h2>
                        </div>
                        <Cart></Cart>
                    </div>
                    <Route exact path="/" component={DashBoard}></Route>
                    <Route exact path="/category/:id" component={CategoryDetails}></Route>
                </div>
            </Router>
        );
    }
}

export default App;
