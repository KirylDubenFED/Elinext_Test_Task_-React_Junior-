import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.scss';

const Button = ({ children }) => (
  <div className={styles.container}>
    <button
      type="button"
      className={styles.button}
      // onClick={(e) => onClick && onClick(e)}
    >
      {children}
    </button>
  </div>
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

Button.defaultProps = {
  children: 'Search',
};

export default Button;
