import React from 'react';

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
