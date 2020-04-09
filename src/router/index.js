import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Registration from '../pages/Registration/Registration';
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword';

export default () => (
  <Router>
    <Switch>
      <Route
        exact
        path="/registration"
        render={(props) => (
          <Registration
            url="/registration"
            pathname="registration"
            location={props.location}
            history={props.history}
          />
        )}
      />
      <Route
        exact
        path="/login"
        render={(props) => (
          <Login
            url="/login"
            pathname="login"
            location={props.location}
            history={props.history}
          />
        )}
      />
      <Route
        exact
        path="/forgot-password"
        render={(props) => (
          <ForgotPassword
            url="/forgot-password"
            pathname="forgotPassword"
            location={props.location}
            history={props.history}
          />
        )}
      />
      {/* <Route path={'/'} component={HomeRouter} /> */}
    </Switch>
  </Router>
);
