import React, { Component } from 'react';
import globalStore from '../../stores/globalStore';

class Checkbox extends Component {
  state = {
    isChecked: false,
  };

  componentDidMount() {
    const { formGroupKey, setSelectedValue, isChecked } = this.props;
    globalStore.setFormValue(formGroupKey, setSelectedValue, isChecked);
    this.setState({ isChecked: this.props.isChecked });
  }

  onChange = (e) => {
    const { formGroupKey, setSelectedValue } = this.props;
    globalStore.setFormValue(formGroupKey, setSelectedValue, e.target.checked);
    this.setState({ isChecked: !this.state.isChecked });
  };

  render() {
    const { id, label, classnames } = this.props;
    return (
      <div className="checkbox-container">
        <div className={classnames}>
          <input
            id={id}
            type="checkbox"
            checked={this.state.isChecked}
            onChange={this.onChange}
          />
          <label htmlFor={id}>
            <span>{label}</span>
          </label>
        </div>
      </div>
    );
  }
}

export default Checkbox;
