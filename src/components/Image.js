import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, alt, width, height }) => (
  <img src={src} alt={alt} style={{ width, height }} />
);

Image.defaultProps = {
  alt: 'Image',
  width: '100px',
  height: '100px'
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  alt: PropTypes.string
};

export default Image;
