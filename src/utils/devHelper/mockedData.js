import i18next from '../../i18next';

export const inputFormFieldRequired = {
  value: '',
  isValid: false,
  error: '',
  showError: '',
};

export const inputFormField = {
  value: '',
  isValid: true,
  error: '',
  showError: '',
};

export const objectFormFieldRequired = {
  value: null,
  isValid: false,
  error: '',
  showError: '',
};

export const objectFormField = {
  value: null,
  isValid: true,
  error: '',
  showError: '',
};

export const cityOptions = [
  {
    id: 4,
    title: 'Izmir',
    selected: false,
  },
  {
    id: 5,
    title: 'Oslo',
    selected: false,
  },
  {
    id: 6,
    title: 'New York',
    selected: false,
  },
];

export const languageOptions = [
  {
    title: 'English-US',
    locale: 'en-US',
    selected: i18next.language === 'en-US',
  },
  {
    title: 'English-UK',
    locale: 'en-UK',
    selected: i18next.language === 'en-UK',
  },
  {
    title: 'Spanish',
    locale: 'es',
    selected: i18next.language === 'es',
  },
  {
    title: 'German',
    locale: 'de',
    selected: i18next.language === 'de',
  },
  {
    title: 'French',
    locale: 'fr',
    selected: i18next.language === 'fr',
  },
];

export const conditionOptions = [
  {
    title: 'Never',
    rate: 1,
    selected: false,
  },
  {
    title: 'Rarely',
    rate: 2,
    selected: false,
  },
  {
    title: 'Sometimes',
    rate: 3,
    selected: false,
  },
  {
    title: 'Often',
    rate: 4,
    selected: false,
  },
  {
    title: 'Always',
    rate: 5,
    selected: false,
  },
];

export const moodOptions = [
  {
    title: 'Sad',
    selected: false,
  },
  {
    title: 'Neutral',
    selected: false,
  },
  {
    title: 'Happy',
    selected: false,
  },
];

export const stateOptions = [
  {
    title: 'Alaska',
    selected: false,
  },
  {
    title: 'Alabama',
    selected: false,
  },
  {
    title: 'Michigan',
    selected: false,
  },
  {
    title: 'Montana',
    selected: false,
  },
  {
    title: 'Iowa',
    selected: false,
  },
];
