import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ id, type, title, classnames, onClick, isDisabled }) => {
  return (
    <div className="btn-container">
      <button
        id={id}
        type={type}
        className={classnames}
        onClick={onClick}
        disabled={isDisabled}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;

Button.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  classnames: PropTypes.string,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
};
