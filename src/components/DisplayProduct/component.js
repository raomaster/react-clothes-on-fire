import React, { Component } from 'react';
import './style.css';
class DisplayProduct extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="DisplayProducts">
        <div className="DisplayProduct-image">
          l<img src={product.image} alt="description of something" />
        </div>
        <br />
        <div className="Cart-checkout-button">
          BUY {product.name}
          ({product.price}.00$)
        </div>
      </div>
    );
  }
}

export default DisplayProduct;
