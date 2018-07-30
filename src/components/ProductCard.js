import React from 'react';
import PropTypes from 'prop-types';
import TextBox from './TextBox';
import Image from './Image';
import Price from './Price';

const ProductCard = ({ title, price, imageUrl }) => (
  <div className="product-card">
    <div className="product-card__title">
      <TextBox>{title}</TextBox>
    </div>
    <div className="cover">
      <Image src={imageUrl} alt={title} width='270px' height='270px' />
    </div>
    <Price>{price}</Price>
  </div>
);

ProductCard.defaultProps = {
  title: 'New product',
  price: 0.0
};

ProductCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  imageUrl: PropTypes.string
};

export default ProductCard;
