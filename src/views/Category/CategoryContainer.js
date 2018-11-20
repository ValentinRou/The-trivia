import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Category from './Category';

class CategoryContainer extends Component {
    render() {
        return (
            <Category 
            name={this.props.match.params.category} 
            />
        );
    }
}


export default withRouter(CategoryContainer);