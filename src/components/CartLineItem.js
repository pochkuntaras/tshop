import React from 'react';
import PropTypes from 'prop-types'

const CartLineItem = ({ title, price, currency }) => (
  <div className="cart-line-item">
    <a href="#" className="cart-line-item__info">
      <img src="" alt={title} className="cart-line-item__cover" />
      <div className="cart-line-item__about">
        {title}
        <br />
        {price} {currency}
      </div>
    </a>
  </div>
);

CartLineItem.defaultProps = {
  title: 'Product title',
  price: 0,
  currency: 'USD'
};

CartLineItem.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  currency: PropTypes.string
};

export default CartLineItem;
