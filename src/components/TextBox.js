import React from 'react';
import PropTypes from 'prop-types';

const TextBox = ({ children }) => (
  <span>{children}</span>
);

TextBox.defaultProps = {
  children: 'New text'
};

TextBox.propTypes = {
  children: PropTypes.string
};

export default TextBox;
