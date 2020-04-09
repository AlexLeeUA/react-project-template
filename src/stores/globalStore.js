import { action, observable } from 'mobx';

class GlobalStore {
  @observable testString = '';

  @action testAction = () => {
    return null;
  };
}

const globalStore = new GlobalStore();

export default globalStore;
