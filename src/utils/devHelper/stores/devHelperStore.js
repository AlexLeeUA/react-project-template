import { action, observable } from 'mobx';
import { i18nStore } from '../../../shared/stores/I18nStore';
import validator from '../../validation/validator';
import {
  inputFormField,
  inputFormFieldRequired,
  objectFormField,
  objectFormFieldRequired,
  cityOptions,
  languageOptions,
  conditionOptions,
  moodOptions,
  stateOptions,
} from '../mockedData';

class DevHelperStore {
  @observable loginForm = {
    label: 'loginForm',
    values: {
      email: { ...inputFormFieldRequired },
      password: { ...inputFormFieldRequired },
    },
    isFormValid: false,
  };

  @observable controlForm = {
    label: 'controlForm',
    values: {
      state: { ...objectFormFieldRequired },
      city: { ...objectFormFieldRequired },
    },
    isFormValid: false,
  };

  @observable mixedForm = {
    label: 'mixedForm',
    values: {
      comment: { ...inputFormField },
      condition: { ...objectFormField },
      city: { ...objectFormFieldRequired },
    },
    isFormValid: false,
  };

  @observable stateOptions = [...stateOptions];
  @observable cityOptions = [...cityOptions];
  @observable languageOptions = [...languageOptions];
  @observable conditionOptions = [...conditionOptions];
  @observable moodOptions = [...moodOptions];

  @action validateField = (formLabel, name, value) => {
    const validatorObj = validator.validate(name, value);
    this[formLabel].values[name] = {
      ...this[formLabel].values[name],
      ...validatorObj,
    };
  };

  @action onSelectFormItem = (formLabel, name, value, required) => {
    this[formLabel].values[name] = {
      ...this[formLabel].values[name],
      value,
      showError: false,
    };
    required && this.validateField(formLabel, name, value);
  };

  @action onSelect = (optionsKey, index, formLabel, name, required) => {
    this[optionsKey] = this[optionsKey].map((option, i) => {
      if (!index && index !== 0) {
        return { ...option };
      } else if (index === i) {
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
    const value = this[optionsKey].find((option) => option.selected);
    //Additional options for select action
    if (optionsKey === 'languageOptions') {
      const { locale } = value;
      i18nStore.changeLanguage(locale);
    }
    if (formLabel) {
      this.onSelectFormItem(formLabel, name, value, required);
    }
  };

  @action onChange = (e, formLabel, required) => {
    const { name, value } = e.target;
    this[formLabel].values[name] = {
      ...this[formLabel].values[name],
      value,
      showError: false,
    };
    required && this.validateField(formLabel, name, value);
  };

  @action onSubmit = (formLabel) => {
    const invalidFields = Object.values(this[formLabel].values).filter(
      (field) => !field.isValid,
    );
    if (invalidFields.length > 0) {
      const values = {};
      for (let [key, value] of Object.entries(this[formLabel].values)) {
        values[key] = {
          ...value,
          showError: !value.isValid,
        };
      }
      this[formLabel].values = values;
    } else {
      console.log(this[formLabel].values);
    }
  };
}

const devHelperStore = new DevHelperStore();

export default devHelperStore;
