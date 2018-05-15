import React, { Component } from 'react';
import MenTShirt from './../../images/products/men-t-shirt.jpg';
import LadiesTShirt from './../../images/products/ladies-t-shirt.jpg';
import './component.css';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false
    };

    this.toggleExpand = this.toggleExpand.bind(this);
  }

  toggleExpand() {
    this.setState(preState => ({
      isExpanded: !preState.isExpanded
    }));
  }

  render() {
    return (
      <div className="Cart">
        <button className="Cart-button" onClick={this.toggleExpand}>
          <span role="img" aria-label="Panda">
            🛒
          </span>CART (2)
        </button>

        <div
          className={`Cart-expanded-area ${
            this.state.isExpanded ? 'expanded' : ''
          }`}
        >
          <div className="Cart-expanded-area-product">
            <div className="Cart-expanded-area-product-image">
              <img src={MenTShirt} alt="Men T Shirt" />
            </div>
            <br />
            <div className="Cart-expanded-area-product-title">
              Men's T-Shirt (75.00$)
            </div>
          </div>
          <div className="Cart-expanded-area-product">
            <div className="Cart-expanded-area-product-image">
              <img src={LadiesTShirt} alt="" />
            </div>
            <br />
            <div className="Cart-expanded-area-product-title">
              Ladies T-Shirt (50.00$)
            </div>
          </div>
          <br />
          <br />
          <div className="Cart-expanded-area-total">
            Total:
            <b>125.00$</b>
          </div>
          <br />
          <div className="Cart-checkout-button">Checkout</div>
        </div>
      </div>
    );
  }
}

export default Cart;
