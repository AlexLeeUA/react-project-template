import validatorTypes from './validatorTypes';
import errorsString from './errorStrings';

class Validator {
  validate = (name, value) => {
    if (!(name in validatorTypes) && validatorTypes.name in this) {
      console.log(
        `validator doesn't have any validation type with name ${name}`,
      );
      return null;
    }
    return this[validatorTypes[name]](value);
  };

  validatorPhone = (value) => {
    return /^[0-9]{9}$/.test(value)
      ? { isValid: true, error: '' }
      : { isValid: false, error: errorsString.PHONE.WRONG_FORMAT };
  };

  validatorEmail = (value) => {
    if (/^.([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/.test(value)) {
      return { isValid: true, error: '' };
    }
    return { isValid: false, error: errorsString.EMAIL.WRONG_FORMAT };
  };

  validatorPassword = (value) => {
    return /^.{4,}$/.test(value)
      ? { isValid: true, error: '' }
      : { isValid: false, error: errorsString.PASSWORD.TO_SHORT };
  };

  validatorName = (value) => {
    return value
      ? /^[a-z\s.'-]+$/iu.test(value)
        ? /^.{2,}$/.test(value)
          ? { isValid: true, error: '' }
          : { isValid: false, error: errorsString.COMMON_ERRORS.LESS_2_CHAR }
        : { isValid: false, error: errorsString.COMMON_ERRORS.FORB_CHAR }
      : { isValid: true, error: '' };
  };

  validatorLogin = (value) => {
    if (value.length < 4) {
      return { isValid: false, error: errorsString.LOGIN.TO_SHORT };
    }
    return { isValid: true, error: '' };
  };

  validatorAddress = (value) => {
    return /^[a-z\s\d.,;:()""''&-\\#]+$/iu.test(value)
      ? { isValid: true, error: '' }
      : { isValid: false, error: errorsString.COMMON_ERRORS.FORB_CHAR };
  };

  validatorNumber = (value) => {
    return !isNaN(value)
      ? { isValid: true, error: '' }
      : { isValid: false, error: errorsString.COMMON_ERRORS.FORB_CHAR };
  };

  validatorZIP = (value) => {
    return /^[0-9]{4}$/.test(value)
      ? { isValid: true, error: '' }
      : { isValid: false, error: errorsString.ZIP.WRONG_FORMAT };
  };
}

const validator = new Validator();

export default validator;
