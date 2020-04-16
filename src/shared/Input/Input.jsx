import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import visibility_off from '../../assets/icons/visibility_off.svg';
import visibility_on from '../../assets/icons/visibility.svg';
import errorIcon from '../../assets/icons/error.svg';

class Input extends Component {
  state = {
    type: null,
    isPasswordShown: false,
  };

  componentDidMount() {
    const { type, formLabel, name, value, required, onValidate } = this.props;
    required && onValidate && onValidate(formLabel, name, value);
    this.setState({ type });
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

  render() {
    const {
      id,
      name,
      type,
      placeholder,
      label,
      value,
      classnames,
      onChange,
      isDisabled,
      error,
      showError,
    } = this.props;

    return (
      <div className="input-container">
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          name={name}
          type={this.state.type}
          value={value}
          className={cx(`${classnames}`, {
            password: type === 'password',
            error: showError,
          })}
          onChange={onChange}
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
        {showError && error && (
          <div className="error-message">
            <img src={errorIcon} alt="error" />
            <span>{error}</span>
          </div>
        )}
      </div>
    );
  }
}

export default Input;

Input.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  classnames: PropTypes.string,
  onChange: PropTypes.func,
  isDisabled: PropTypes.bool,
  error: PropTypes.string,
  showError: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};
