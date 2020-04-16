import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withTranslation } from 'react-i18next';
import Router from './router';
import SharedItemsLib from './utils/devHelper/SharedItemsLib';

@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <SharedItemsLib />
      </div>
    );
  }
}

export default withTranslation()(App);
