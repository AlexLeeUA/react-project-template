import React, { Component } from 'react';
import cx from 'classnames';
import visibility_off from '../../assets/icons/visibility_off.svg';
import visibility_on from '../../assets/icons/visibility.svg';
import error from '../../assets/icons/error.svg';
import globalStore from '../../stores/globalStore';

class Input extends Component {
  state = {
    type: null,
    value: '',
    isPasswordShown: false,
  };

  componentDidMount() {
    const { formGroupKey, setSelectedValue, value, type } = this.props;
    globalStore.setFormValue(formGroupKey, setSelectedValue, value);
    this.setState({ type, value });
  }

  onTogglePassword = () => {
    this.setState({ isPasswordShown: !this.state.isPasswordShown }, () =>
      this.onChangeType(),
    );
  };

  onChangeType = () => {
    if (this.state.isPasswordShown) {
      this.setState({ type: 'text' });
    } else {
      this.setState({ type: 'password' });
    }
  };

  onChange = (e) => {
    const { formGroupKey, setSelectedValue } = this.props;
    globalStore.setFormValue(formGroupKey, setSelectedValue, e.target.value);
    this.setState({ value: e.target.value });
  };

  render() {
    const {
      id,
      type,
      placeholder,
      label,
      classnames,
      isDisabled,
      errorMessage,
    } = this.props;

    return (
      <div className="input-container">
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          type={this.state.type}
          value={this.state.value}
          className={cx(`${classnames}`, {
            password: type === 'password',
          })}
          onChange={this.onChange}
          disabled={isDisabled}
          placeholder={placeholder}
        />
        {type === 'password' ? (
          this.state.isPasswordShown ? (
            <img
              src={visibility_off}
              alt="hide_password"
              className="toggle-data"
              onClick={this.onTogglePassword}
            />
          ) : (
            <img
              src={visibility_on}
              alt="show_password"
              className="toggle-data"
              onClick={this.onTogglePassword}
            />
          )
        ) : null}
        {errorMessage && (
          <div className="error-message">
            <img src={error} alt="error" />
            <span>{errorMessage}</span>
          </div>
        )}
      </div>
    );
  }
}

export default Input;
