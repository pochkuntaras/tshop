import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import { map } from 'lodash';

const Catalog = ({ products }) => (
  <div>
    {map(products, (product) => <ProductCard key={product.id} {...product} />)}
  </div>
);

Catalog.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape(ProductCard.propTypes)
  )
};

export default Catalog;
