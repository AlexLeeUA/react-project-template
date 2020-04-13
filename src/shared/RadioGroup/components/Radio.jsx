import React from 'react';
import Button from '../../Button';
import classnames from 'classnames';

const Radio = ({ title, selected, onClick }) => {
  return (
    <Button
      type="button"
      onClick={onClick}
      title={title}
      classnames={classnames('btn', 'large', {
        primary: selected,
        green: selected,
        secondary: !selected,
      })}
    />
  );
};

export default Radio;
