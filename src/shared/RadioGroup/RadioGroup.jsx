import React, { Component } from 'react';
import Radio from './components/Radio';
import globalStore from '../../stores/globalStore';

class RadioGroup extends Component {
  state = {
    options: [],
  };

  componentDidMount() {
    this.onSetFormValue(this.props.options);
    this.setState({ options: this.props.options });
  }

  onChange = (index) => {
    const updatedOptions = this.state.options.map((option, i) => {
      if (index === i) {
        return {
          ...option,
          selected: !option.selected,
        };
      } else {
        return {
          ...option,
          selected: false,
        };
      }
    });
    this.onSetFormValue(updatedOptions);
    this.setState({ options: updatedOptions });
  };

  onSetFormValue = (list) => {
    const { formGroupKey, setSelectedValue } = this.props;
    const selectedValue = list.find((option) => option.selected);
    globalStore.setFormValue(formGroupKey, setSelectedValue, selectedValue);
  };

  render() {
    return (
      <div className="radio-group">
        {this.state.options.map((option, index) => (
          <Radio
            onClick={() => this.onChange(index)}
            title={option.title}
            selected={option.selected}
            key={index}
          />
        ))}
      </div>
    );
  }
}

export default RadioGroup;
