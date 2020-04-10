import React from 'react';
import CompleteIcon from '../CompleteIcon';

const Tab = ({ id, text, count, completed, classnames, containerStyles }) => {
  return (
    <div style={containerStyles}>
      <div className={classnames}>
        <span>{text}</span>
        {count && <span className="number">{count}</span>}
        {completed && <CompleteIcon />}
      </div>
    </div>
  );
};

export default Tab;
