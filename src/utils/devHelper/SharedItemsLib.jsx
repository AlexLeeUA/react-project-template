import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withTranslation } from 'react-i18next';
import classnames from 'classnames';
import Button from '../../shared/Button';
import TextLink from '../../shared/TextLink';
import Tab from '../../shared/Tab';
import RadioGroup from '../../shared/RadioGroup';
import Checkbox from '../../shared/Checkbox';
import Select from '../../shared/Select';
import Input from '../../shared/Input';
import FormContainer from '../../shared/FormContainer/FormContainer';
import devHelperStore from './stores/devHelperStore';

@observer
class SharedItemsLib extends Component {
  state = {
    tabSelected: 'tab1',
    checkboxLarge: true,
    checkboxSmall: false,
  };

  render() {
    const { t } = this.props;
    return (
      <div className="lib">
        <section>
          <div className="title">1. Language select</div>
          <p>Value: {t('LOGIN_PAGE.TITLE')}</p>
          <Select
            label={'Select language'}
            placeholder="Select..."
            name={'language'}
            value={devHelperStore.languageOptions.find(
              (option) => option.selected,
            )}
            options={devHelperStore.languageOptions}
            optionsKey={'languageOptions'}
            onSelect={devHelperStore.onSelect}
          />
        </section>
        <section>
          <div className="title">2. Buttons</div>
          <div className="buttons">
            <Button
              title="Large Primary"
              type="text"
              classnames={classnames('btn', 'large', 'primary', 'blue')}
              onClick={() => console.log('btn1')}
            />
            <Button
              title="Large Primary"
              type="text"
              classnames={classnames('btn', 'large', 'primary', 'green')}
              onClick={() => console.log('btn2')}
            />
            <Button
              title="Large Secondary"
              type="text"
              classnames={classnames('btn', 'large', 'secondary')}
              onClick={() => console.log('btn3')}
            />
            <Button
              title="Small Primary"
              type="text"
              classnames={classnames('btn', 'small', 'primary', 'blue')}
              onClick={() => console.log('btn4')}
            />
            <Button
              title="Small Primary"
              type="text"
              classnames={classnames('btn', 'small', 'primary', 'green')}
              onClick={() => console.log('btn5')}
            />
          </div>
        </section>
        <section>
          <div className="title">3. Text link</div>
          <TextLink
            url={'#'}
            text="Text Link"
            //classnames={classnames('disabled')}
          />
        </section>
        <section>
          <div className="title">4. Tabs</div>
          <div className="tabs">
            <Tab
              id={'tab1'}
              text="Default"
              classnames={classnames('tab', {
                active: this.state.tabSelected === 'tab1',
              })}
              onClick={() => this.setState({ tabSelected: 'tab1' })}
            />
            <Tab
              id={'tab2'}
              text="With number"
              count={23}
              classnames={classnames('tab', 'multiple', {
                active: this.state.tabSelected === 'tab2',
              })}
              onClick={() => this.setState({ tabSelected: 'tab2' })}
            />
            <Tab
              id={'tab3'}
              text="Complited"
              isCompleted={true}
              classnames={classnames('tab', 'multiple', {
                active: this.state.tabSelected === 'tab3',
              })}
              onClick={() => this.setState({ tabSelected: 'tab3' })}
            />
          </div>
        </section>
        <section>
          <div className="title">5. Checkboxes</div>
          <div className="checkboxes">
            <Checkbox
              id="checkboxLarge"
              classnames={classnames('checkbox', 'large')}
              label="Large"
              name={'power'}
              isChecked={this.state.checkboxLarge}
              onChange={(e) =>
                this.setState({ [e.target.id]: !this.state[e.target.id] })
              }
            />
            <Checkbox
              id="checkboxSmall"
              classnames={classnames('checkbox', 'small')}
              label="Small"
              isChecked={this.state.checkboxSmall}
              onChange={(e) =>
                this.setState({ [e.target.id]: !this.state[e.target.id] })
              }
            />
          </div>
        </section>
        <section>
          <div className="title">6. Radiogroups</div>
          <RadioGroup
            options={devHelperStore.conditionOptions}
            optionsKey={'conditionOptions'}
            onSelect={devHelperStore.onSelect}
            name={'condition'}
          />
          <RadioGroup
            options={devHelperStore.moodOptions}
            optionsKey={'moodOptions'}
            name={'mood'}
            onSelect={devHelperStore.onSelect}
          />
        </section>
        <section>
          <div className="title">7. Form example 1 with validation</div>
          <FormContainer
            form={devHelperStore.loginForm}
            onSubmit={devHelperStore.onSubmit}
          >
            <Input
              classnames={classnames('input')}
              label={'Email address'}
              type="text"
              name={'email'}
              required={true}
              onValidate={devHelperStore.validateField}
              onChange={(e) =>
                devHelperStore.onChange(e, devHelperStore.loginForm.label, true)
              }
            />
            <Input
              classnames={classnames('input')}
              label={'Password'}
              type="password"
              name={'password'}
              required={true}
              onValidate={devHelperStore.validateField}
              onChange={(e) =>
                devHelperStore.onChange(e, devHelperStore.loginForm.label, true)
              }
            />
            <Button
              classnames={classnames('btn', 'large', 'primary', 'blue')}
              title="Login"
              type="submit"
            />
          </FormContainer>
        </section>
        <section>
          <div className="title">8. Form example 2 with validation</div>
          <FormContainer
            form={devHelperStore.controlForm}
            onSubmit={devHelperStore.onSubmit}
          >
            <Select
              label={'State'}
              placeholder="Select..."
              name={'state'}
              required={true}
              options={devHelperStore.stateOptions}
              optionsKey={'stateOptions'}
              onSelect={devHelperStore.onSelect}
            />
            <Select
              label={'City'}
              placeholder="Select..."
              name={'city'}
              required={true}
              options={devHelperStore.cityOptions}
              optionsKey={'cityOptions'}
              onSelect={devHelperStore.onSelect}
            />
            <Button
              classnames={classnames('btn', 'large', 'primary', 'blue')}
              title="Submit"
              type="submit"
            />
          </FormContainer>
        </section>
        <section>
          <div className="title">9. Form example 3</div>
          <FormContainer
            form={devHelperStore.mixedForm}
            onSubmit={devHelperStore.onSubmit}
          >
            <Input
              classnames={classnames('input')}
              label={'Comment'}
              type="text"
              name={'comment'}
              onValidate={devHelperStore.validateField}
              onChange={(e) =>
                devHelperStore.onChange(e, devHelperStore.mixedForm.label)
              }
            />
            <RadioGroup
              options={devHelperStore.conditionOptions}
              optionsKey={'conditionOptions'}
              onSelect={devHelperStore.onSelect}
              name={'condition'}
            />
            <Select
              label={'City'}
              placeholder="Select..."
              name={'city'}
              options={devHelperStore.cityOptions}
              optionsKey={'cityOptions'}
              required={true}
              onSelect={devHelperStore.onSelect}
            />
            <Button
              classnames={classnames('btn', 'large', 'primary', 'blue')}
              title="Submit"
              type="submit"
            />
          </FormContainer>
        </section>
      </div>
    );
  }
}

export default withTranslation()(SharedItemsLib);
