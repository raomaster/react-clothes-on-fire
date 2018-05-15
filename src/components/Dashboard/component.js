import React, { Component } from 'react';
import Category from '../Category/component';
import CATEGORIES from './../../data/categories';

class DashBoard extends Component {
  render() {
    //const categories = CATEGORIES;
    return (
      <div className="App-categories">
        {CATEGORIES.map((categories, index) => (
          <Category category={categories} key={index} />
        ))}
      </div>
    );
  }
}

export default DashBoard;
