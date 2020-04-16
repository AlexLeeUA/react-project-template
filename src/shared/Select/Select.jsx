import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import arrow_up from '../../assets/icons/keyboard_arrow_up.svg';
import arrow_down from '../../assets/icons/keyboard_arrow_down.svg';
import check from '../../assets/icons/check.svg';
import errorIcon from '../../assets/icons/error.svg';

class Select extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listOpen: false,
    };

    this.ref = React.createRef();
  }

  componentDidMount() {
    const { name, required, onSelect, optionsKey, formLabel } = this.props;
    const index = null;
    onSelect(optionsKey, index, formLabel, name, required);
    document.addEventListener('click', this.handleClickOutside, true);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.setState({ listOpen: false });
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, true);
  }

  handleClickOutside = (e) => {
    if (this.ref.current && !this.ref.current.contains(e.target)) {
      this.setState({ listOpen: false });
    }
  };

  toggleList = () => {
    this.setState({ listOpen: !this.state.listOpen });
  };

  render() {
    const {
      id,
      label,
      name,
      value,
      required,
      placeholder,
      options,
      onSelect,
      optionsKey,
      formLabel,
      error,
      showError,
    } = this.props;
    const { listOpen } = this.state;
    const headerTitle = value ? value.title : placeholder;

    return (
      <div className="dd-container" ref={this.ref}>
        <label htmlFor={id}>{label}</label>
        <div
          className={cx('dd-header', { open: listOpen, error: showError })}
          onClick={() => this.toggleList()}
        >
          <div className="dd-header-title">{headerTitle}</div>
          {listOpen ? (
            <img src={arrow_up} alt="arrow-up" />
          ) : (
            <img src={arrow_down} alt="arrow-down" />
          )}
        </div>
        {showError && error && (
          <div className="error-message">
            <img src={errorIcon} alt="error" />
            <span>{error}</span>
          </div>
        )}
        {listOpen && (
          <ul className="dd-list">
            {options.map((item, index) => (
              <li
                className={cx('dd-list-item', {
                  selected: item.selected,
                })}
                key={item.title}
                onClick={() =>
                  onSelect(optionsKey, index, formLabel, name, required)
                }
              >
                {item.title} {item.selected && <img src={check} alt="check" />}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Select;

Select.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.object,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  isDisabled: PropTypes.bool,
  options: PropTypes.array.isRequired,
  optionsKey: PropTypes.string.isRequired,
  formLabel: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  error: PropTypes.string,
  showError: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};
