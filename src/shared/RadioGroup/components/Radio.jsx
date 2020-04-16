import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';
import classnames from 'classnames';

const Radio = ({ title, selected, rate, onClick }) => {
  return (
    <Button
      type="button"
      onClick={onClick}
      title={`${title} ${rate ? `(${rate})` : ''}`}
      classnames={classnames('btn', 'large', {
        primary: selected,
        green: selected,
        secondary: !selected,
      })}
    />
  );
};

export default Radio;

Radio.propTypes = {
  title: PropTypes.string.isRequired,
  rate: PropTypes.number,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool,
};
