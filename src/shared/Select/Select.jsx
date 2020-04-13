import React, { Component } from 'react';
import classnames from 'classnames';
import arrow_up from '../../assets/icons/keyboard_arrow_up.svg';
import arrow_down from '../../assets/icons/keyboard_arrow_down.svg';
import check from '../../assets/icons/check.svg';

class Select extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      listOpen: false,
      headerTitle: '',
    };

    this.ref = React.createRef();
  }

  componentDidMount() {
    const headerTitle = this.selectedHeader(this.props.list);
    this.setState({
      headerTitle: headerTitle,
      list: this.props.list,
    });

    document.addEventListener('click', this.handleClickOutside, true);
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

  selectItem = (index) => {
    const updatedList = this.state.list.map((option, i) => {
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
    const headerTitle = this.selectedHeader(updatedList);
    this.setState({ list: updatedList, headerTitle: headerTitle });
  };

  selectedHeader = (list) => {
    const selectedItem = list.find((item) => item.selected);
    const headerTitle = selectedItem
      ? selectedItem.title
      : this.props.placeholder;

    return headerTitle;
  };

  render() {
    const { list, listOpen, headerTitle } = this.state;
    return (
      <div className="dd-container" ref={this.ref}>
        <div
          className={classnames('dd-header', { open: listOpen })}
          onClick={() => this.toggleList()}
        >
          <div className="dd-header-title">{headerTitle}</div>
          {listOpen ? (
            <img src={arrow_up} alt="arrow-up" />
          ) : (
            <img src={arrow_down} alt="arrow-down" />
          )}
        </div>
        {listOpen && (
          <ul className="dd-list">
            {list.map((item, index) => (
              <li
                className={classnames('dd-list-item', {
                  selected: item.selected,
                })}
                key={item.title}
                onClick={() => this.selectItem(index)}
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
