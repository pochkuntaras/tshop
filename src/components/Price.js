import React from 'react';
import PropTypes from 'prop-types';

const Price = ({ children, currency }) => (
  <span className="price">
    <span className="price__value">{children}</span>
    &nbsp;
    <span className="price__currency">{currency}</span>
  </span>
);

Price.defaultProps = {
  children: 0.0,
  currency: 'USD'
};

Price.propTypes = {
  children: PropTypes.number.isRequired,
  currency: PropTypes.string
};

export default Price;
