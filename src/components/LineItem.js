import React from 'react';
import PropTypes from 'prop-types';

const LineItem = ({ id, title, price, deleteFunc }) => (
  <div className="line-item">
    <span className="line-item__id">{id}</span>
    &nbsp;|&nbsp;
    <span className="line-item__price">{price} USD</span>
    &nbsp;|&nbsp;
    <a href="#" title={`Delete ${title}`} onClick={deleteFunc}>
      Delete
    </a>
    &nbsp;|&nbsp;
    <span className="line-item__title">{title}</span>
  </div>
);

LineItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  deleteFunc: PropTypes.func.isRequired
};

export default LineItem;
