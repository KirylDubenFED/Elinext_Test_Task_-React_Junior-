import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ onImputChange }) => (
  <input type="text" onChange={(e) => { onImputChange(e.target.value); }} />
);

Input.propTypes = {
  onImputChange: PropTypes.func,
};

Input.defaultProps = {
  onImputChange: () => { },
};

export default Input;
