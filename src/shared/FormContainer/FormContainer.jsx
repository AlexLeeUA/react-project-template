import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

@observer
class FormContainer extends Component {
  render() {
    const childrenWithProps = React.Children.map(
      this.props.children,
      (child) => {
        if (child.props.type === 'submit') {
          return React.cloneElement(child, {
            onClick: () => this.props.onSubmit(this.props.form.label),
          });
        } else {
          const formField = this.props.form.values[child.props.name];
          return React.cloneElement(child, {
            formLabel: this.props.form.label,
            value: formField.value,
            error: formField.error,
            showError: formField.showError,
          });
        }
      },
    );

    return <div className="form-container">{childrenWithProps}</div>;
  }
}

export default FormContainer;

FormContainer.propTypes = {
  children: PropTypes.node.isRequired,
  form: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
