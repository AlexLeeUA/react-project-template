import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radio from './components/Radio';

class RadioGroup extends Component {
  componentDidMount() {
    const { name, required, onSelect, optionsKey, formLabel } = this.props;
    const index = null;
    onSelect(optionsKey, index, formLabel, name, required);
  }

  render() {
    const {
      name,
      onSelect,
      options,
      optionsKey,
      formLabel,
      required,
    } = this.props;
    return (
      <div className="radio-group">
        {options.map((option, index) => (
          <Radio
            onClick={() =>
              onSelect(optionsKey, index, formLabel, name, required)
            }
            title={option.title}
            rate={option.rate}
            selected={option.selected}
            key={index}
          />
        ))}
      </div>
    );
  }
}

export default RadioGroup;

RadioGroup.propTypes = {
  name: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  optionsKey: PropTypes.string.isRequired,
  formLabel: PropTypes.string,
  required: PropTypes.bool,
};
