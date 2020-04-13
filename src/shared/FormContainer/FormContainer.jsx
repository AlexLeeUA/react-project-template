import React, { Component } from 'react';

class FormContainer extends Component {
  state = {};

  setSelectedValue = (key, value) => {
    this.setState({ [key]: value });
  };

  onSubmit = () => {
    console.log(this.state);
  };

  render() {
    const childrenWithProps = React.Children.map(
      this.props.children,
      (child) => {
        if (child.props.type === 'submit') {
          return React.cloneElement(child, {
            onClick: this.onSubmit,
          });
        } else {
          return React.cloneElement(child, {
            setSelectedValue: this.setSelectedValue,
          });
        }
      },
    );

    return <div>{childrenWithProps}</div>;
  }
}

export default FormContainer;
