import React, {Component} from 'react';
import CATEGORIES from './../../data/categories';
import DisplayProduct from './../DisplayProduct/component';
import './component.css';

class CategoryDetails extends Component {
    render() {
        const categoryId = +this.props.match.params.id;
        // console.log(categoryId);
        const category = CATEGORIES[categoryId];
        // console.log(category);

        return (
            <div className="CategoryDetails">
                {category
                    .products
                    .map((product, index) => (
                        <DisplayProduct product={product} key={index}></DisplayProduct>
                    ))
}
            </div>
        );
    }
}

export default CategoryDetails;