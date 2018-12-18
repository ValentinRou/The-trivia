import React, { Component } from 'react';
import Home from './Home';
import api from '../../helpers/api';

class HomeContainer extends Component {
  state = {
    categories: [],
  }
  async componentDidMount() {    
    const data = await api.getCategories();
    this.setState({
      categories: data,
    });
    console.log(data);
  }

  render() {
    if (this.state.categories.length === 0) return <div></div>  
    return (
      <Home categories={this.state.categories} />  
      
    );
  }
}

export default HomeContainer;