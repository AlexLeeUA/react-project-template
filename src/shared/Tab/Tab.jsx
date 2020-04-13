import React from 'react';
import CompleteIcon from '../CompleteIcon';

const Tab = ({ id, text, classnames, count, isCompleted }) => {
  return (
    <div className="tab-container">
      <div id={id} className={classnames}>
        <span>{text}</span>
        {count && <span className="number">{count}</span>}
        {isCompleted && <CompleteIcon />}
      </div>
    </div>
  );
};

export default Tab;
