import React from 'react';
import Category from '../Category/component';
import CATEGORIES from './../../data/categories';
import './style.css';

function Dashboard({ categories = CATEGORIES }) {
  return (
    <div className="App-categories">
      {categories.map((category, index) => (
        <Category category={category} key={index} />
      ))}
    </div>
  );
}

export default Dashboard;
