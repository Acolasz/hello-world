import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Product extends Component {

    render() {
        const green = Math.round((30 + 1) * 128);
        const red = 255 - green;
        const textColor = {
            backgroundColor: 'rgb(' + red + ', ' + green + ', 0)',
            padding: '15px'
        };

        return 
            <div style={textColor}> 
                {products.map((product) => (
                        Hello {product.title}!
                    )
            </div>
    }
}

export default Product;