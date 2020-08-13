import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import { history } from '../_helpers';

import { SignUp } from '../Components/SignUp';
import { Login } from '../Components/Login';
import { GifSearch } from '../Components/GifSearch';
import { Chat } from '../Components/Chat';

function App() {
  
  return (
    <div className="container">
      <div className="col-md-8 offset-md-2">
        {alert.message && (
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        )}
        <Router history={history}>
          <Switch>
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/gifSearch" component={GifSearch} />
            <Route exact path="/" component={Chat} />
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export { App };
