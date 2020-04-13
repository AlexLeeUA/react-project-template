import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withTranslation } from 'react-i18next';
import Router from './router';
import Button from './shared/Button';
import TextLink from './shared/TextLink';
import Tab from './shared/Tab';
import RadioGroup from './shared/RadioGroup';
import Checkbox from './shared/Checkbox';
import Select from './shared/Select';
import Input from './shared/Input';
import FormContainer from './shared/FormContainer/FormContainer';
import { i18nStore } from './shared/stores/I18nStore';
import classnames from 'classnames';

const defaultOptions1 = [
  {
    title: 'Never (1)',
    selected: false,
  },
  {
    title: 'Rarely (2)',
    selected: false,
  },
  {
    title: 'Sometimes (3)',
    selected: false,
  },
  {
    title: 'Often (4)',
    selected: false,
  },
  {
    title: 'Always (5)',
    selected: false,
  },
];

const defaultOptions2 = [
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

const selectOptions = [
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
    selected: true,
  },
];
@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <p> {this.props.t('LOGIN_PAGE.TITLE')}</p>
        <div style={{ width: '127px' }}>
          <Button
            classnames={classnames('btn', 'large', 'primary', 'blue')}
            onClick={() => i18nStore.changeLanguage('en-US')}
            title="EnglishUS"
            type="text"
          />
          <Button
            classnames={classnames('btn', 'large', 'primary', 'green')}
            onClick={() => i18nStore.changeLanguage('en-UK')}
            title="EnglishUK"
            type="text"
          />
          <Button
            classnames={classnames('btn', 'large', 'secondary')}
            onClick={() => i18nStore.changeLanguage('es')}
            title="Spanish"
            type="text"
          />
          <Button
            onClick={() => i18nStore.changeLanguage('de')}
            title="German"
            classnames={classnames('btn', 'small', 'primary', 'blue')}
            type="text"
          />
          <Button
            onClick={() => i18nStore.changeLanguage('fr')}
            title="French"
            classnames={classnames('btn', 'small', 'primary', 'green')}
            type="text"
          />
        </div>
        <TextLink
          url={'#'}
          text="Hello App"
          //classnames={classnames('disabled')}
        />
        <Tab text="Intro" classnames={classnames('tab', { active: true })} />
        <Tab
          text="Intro"
          count={23}
          classnames={classnames('tab', 'multiple', { active: true })}
        />
        <Tab
          text="Intro"
          isCompleted={true}
          classnames={classnames('tab', 'multiple', { active: false })}
        />
        <Checkbox
          id="checkbox_2"
          classnames={classnames('checkbox', 'small')}
          label="Check it small"
          isChecked={true}
        />
        <Select placeholder="Select..." list={selectOptions} />
        <FormContainer>
          <RadioGroup options={defaultOptions1} formGroupKey={'condition'} />
          <RadioGroup options={defaultOptions2} formGroupKey={'mood'} />
          <Checkbox
            id="checkbox_1"
            classnames={classnames('checkbox', 'large')}
            label="Check it"
            formGroupKey={'power'}
            isChecked={true}
          />
          <Button
            classnames={classnames('btn', 'large', 'primary', 'blue')}
            title="Next"
            type="submit"
          />
        </FormContainer>
        <FormContainer>
          <Input
            classnames={classnames('input')}
            label={'Email address'}
            type="text"
            formGroupKey={'email'}
            value={''}
          />
          <Input
            classnames={classnames('input', { error: false })}
            label={'Password'}
            type="password"
            formGroupKey={'password'}
            value={''}
          />
          <Button
            classnames={classnames('btn', 'large', 'primary', 'blue')}
            title="Login"
            type="submit"
          />
        </FormContainer>
      </div>
    );
  }
}

export default withTranslation()(App);
