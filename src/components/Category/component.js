import React, {Component} from 'react';
import './component.css';

class Categories extends Component {
    render() {
        const category = this.props.category;
        return (
            <div>
                <div className="App-category" key={this.props.index}>
                    <img
                        src={category.image}
                        className="App-category-front-image"
                        style={category.imageStyle}
                        alt=""/>
                    <div className="App-category-title" style={category.titleStyle}>{category.name}</div>
                </div>
            </div>
        );
    }
}

export default Categories;