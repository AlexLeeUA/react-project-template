import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withTranslation } from 'react-i18next';
import Router from './router';
import { i18nStore } from './shared/stores/I18nStore';

@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <p>{this.props.t('LOGIN_PAGE.TITLE')}</p>
        <button onClick={() => i18nStore.changeLanguage('en-US')}>
          EnglishUS
        </button>
        <button onClick={() => i18nStore.changeLanguage('en-UK')}>
          EnglishUK
        </button>
        <button onClick={() => i18nStore.changeLanguage('es')}>Spanish</button>
        <button onClick={() => i18nStore.changeLanguage('de')}>German</button>
        <button onClick={() => i18nStore.changeLanguage('fr')}>French</button>
      </div>
    );
  }
}

export default withTranslation()(App);
