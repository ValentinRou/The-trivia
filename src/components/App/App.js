import React, { Component } from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import HomeContainer from '../../views/Home/HomeContainer';
import CategoryContainer from '../../views/Category/CategoryContainer';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/categories/:id" component={CategoryContainer} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
