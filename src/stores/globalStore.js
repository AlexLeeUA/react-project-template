import { action, observable } from 'mobx';

class GlobalStore {
  @observable testString = '';

  @action setFormValue = (formGroupKey, setSelectedValue, value) => {
    if (formGroupKey) {
      setSelectedValue(formGroupKey, value);
    }
  };
}

const globalStore = new GlobalStore();

export default globalStore;
