import React from 'react';
import PropTypes from 'prop-types';
import CompleteIcon from '../CompleteIcon';

const Tab = ({ id, text, classnames, count, isCompleted, onClick }) => {
  return (
    <div className="tab-container">
      <div id={id} className={classnames} onClick={onClick}>
        <span>{text}</span>
        {count && <span className="number">{count}</span>}
        {isCompleted && <CompleteIcon />}
      </div>
    </div>
  );
};

export default Tab;

Tab.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  text: PropTypes.string.isRequired,
  classnames: PropTypes.string,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isCompleted: PropTypes.bool,
  onClick: PropTypes.func,
};
