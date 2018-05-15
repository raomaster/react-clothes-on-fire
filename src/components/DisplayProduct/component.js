import React, {Component} from 'react';
import './style.css';
class DisplayProduct extends Component {
    render() {
        const product = this.props.product;
        return (
            <div className="DisplayProducts">
                <div className="DisplayProduct-image">
                    <img src={product.image}/>
                </div>
                <br/>
                <div className="Cart-checkout-button">BUY {product.name}
                    ({product.price}.00$)</div>
            </div>
        );
    }
}

export default DisplayProduct;