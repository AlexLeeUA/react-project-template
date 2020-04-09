import { observable, action, reaction } from 'mobx';
import i18next from '../../../i18next';

class I18nStore {
  @observable locale;

  @action changeLanguage = (locale) => {
    this.locale = locale;
  };
}

export const i18nStore = new I18nStore();

reaction(
  () => i18nStore.locale,
  (locale) => {
    i18next.changeLanguage(locale);
  },
);
