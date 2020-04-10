import React from 'react';

const Button = ({
  id,
  title,
  classnames,
  containerStyles,
  onClick,
  disabled,
}) => {
  return (
    <div style={containerStyles}>
      <button
        id={id}
        className={classnames}
        onClick={onClick}
        disabled={disabled}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
