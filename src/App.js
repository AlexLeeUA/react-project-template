import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withTranslation } from 'react-i18next';
import Router from './router';
import Button from './shared/Button';
import TextLink from './shared/TextLink';
import Tab from './shared/Tab';
import { i18nStore } from './shared/stores/I18nStore';
import classnames from 'classnames';

@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <p> {this.props.t('LOGIN_PAGE.TITLE')}</p>
        <Button
          classnames={classnames('btn', 'large', 'primary', 'blue')}
          onClick={() => i18nStore.changeLanguage('en-US')}
          title="EnglishUS"
          containerStyles={{ width: '100px' }}
        />
        <Button
          classnames={classnames('btn', 'large', 'primary', 'green')}
          onClick={() => i18nStore.changeLanguage('en-UK')}
          title="EnglishUK"
          containerStyles={{ width: '200px' }}
        />
        <Button
          classnames={classnames('btn', 'large', 'secondary')}
          onClick={() => i18nStore.changeLanguage('es')}
          title="Spanish"
          containerStyles={{ width: '300px' }}
        />
        <Button
          onClick={() => i18nStore.changeLanguage('de')}
          title="German"
          classnames={classnames('btn', 'small', 'primary', 'blue')}
          containerStyles={{ width: '400px' }}
        />
        <Button
          onClick={() => i18nStore.changeLanguage('fr')}
          title="French"
          classnames={classnames('btn', 'small', 'primary', 'green')}
          containerStyles={{ width: '500px' }}
        />
        <TextLink
          url={'#'}
          text="Hello App"
          //classnames={classnames('disabled')}
        />
        <Tab
          text="Intro"
          containerStyles={{ width: '120px' }}
          classnames={classnames('tab', { active: true })}
        />
        <Tab
          text="Intro"
          count={23}
          containerStyles={{ width: '120px' }}
          classnames={classnames('tab', 'multiple', { active: true })}
        />
        <Tab
          text="Intro"
          completed={true}
          containerStyles={{ width: '120px' }}
          classnames={classnames('tab', 'multiple', { active: true })}
        />
      </div>
    );
  }
}

export default withTranslation()(App);
