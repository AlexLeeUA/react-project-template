import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ id, label, classnames, isChecked, onChange }) => {
  return (
    <div className="checkbox-container">
      <div className={classnames}>
        <input
          id={id}
          type="checkbox"
          checked={isChecked}
          onChange={onChange}
        />
        <label htmlFor={id}>
          <span>{label}</span>
        </label>
      </div>
    </div>
  );
};

export default Checkbox;

Checkbox.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  classnames: PropTypes.string,
  isChecked: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
};
