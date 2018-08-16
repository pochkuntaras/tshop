import React from 'react';
import PropTypes from 'prop-types';
import CartLineItem from './CartLineItem';
import { map } from 'lodash';
import products from '../constants/Products';

const Cart = ({ lineItems }) => (
  <div className="cart">
    <div className="cart__content">
      {
        map(products,
          (product) => <CartLineItem key={product.id} {...product} />
        )
      }
    </div>
  </div>
);

Cart.propTypes = {
  lineItems: PropTypes.arrayOf(
    PropTypes.shape(CartLineItem.propTypes)
  )
};

export default Cart;
