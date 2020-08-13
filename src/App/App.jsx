import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { history } from '../_helpers';

// import { HomePage } from '../HomePage';
import { SignUp } from '../Components/SignUp';
import { Login } from '../Components/Login';
import { GifSearch } from '../Components/GifSearch';
import { Chat } from '../Components/Chat';
// import { Users } from '../Users';
// import { User } from '../User';
// import { EventLogs } from '../EventLogs';

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
      <Navbar fixed="bottom">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export { App };
