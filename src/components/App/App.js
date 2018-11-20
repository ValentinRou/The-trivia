import React, { Component } from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Home from '../../views/Home/Home';
import CategoryContainer from '../../views/Category/CategoryContainer';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
          <Route exact path="/" component={Home} />
          <Route path="/categories/:category" component={CategoryContainer} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
