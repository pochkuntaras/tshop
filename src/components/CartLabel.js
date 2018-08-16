import React from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';

const CartLabel = ({ quantity }) => (
  <a href='#' className='cart-label'>
    <SVG
      src='../../dist/icons/cart.svg'
      className='cart-label__icon'
    />
    <div className='cart-label__total-quantity'>
      {quantity ? quantity : ''}
    </div>
    Cart
  </a>
);

CartLabel.defaultProps = {
  quantity: 0
};

CartLabel.propTypes = {
  quantity: PropTypes.number
};

export default CartLabel;
