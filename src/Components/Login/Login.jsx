import React, { useState, useEffect } from 'react';
import { history } from '../../_helpers/history';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import { userService } from '../../_services/user.service';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  function handleUsernameChange(e) {
    const { value } = e.target;
    setUsername(value);
  }

  function handlePasswordChange(e) {
    const { value } = e.target;
    setPassword(value);
  }

  function handleSubmit() {
    setSubmitted(true);
    userService.login(username, password).then((data) => {
      if (data.error) {
        setStatusMessage(data.error);
        setHasError(true);
      }
      else {
        setHasError(false);
        console.log('logged in', data);
        localStorage.setItem('jwt', data.token);
        history.push('/gifSearch');
      }
    });
  }

  useEffect(() => {
    let jwt = localStorage.getItem('jwt')
    if (jwt && jwt !== '') {
      history.push('/gifSearch');
    }
  }, []);

  return (
    <div className="col-lg-8 offset-lg-2">
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/signup">SignUp</Breadcrumb.Item>
        <Breadcrumb.Item active>Login</Breadcrumb.Item>
      </Breadcrumb>
      <Form name="form">
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control placeholder="username" aria-label="Username" onChange={handleUsernameChange} value={username} autoFocus />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control placeholder="password" aria-label="Password" onChange={handlePasswordChange} value={password} />
        </Form.Group>
          
        <Button onClick={() => handleSubmit()} variant="outline-primary">Log In</Button>
      </Form>

      { submitted && !hasError &&
        <Alert variant={'success'}>{ statusMessage }</Alert>
      }
      { submitted && hasError &&
        <Alert variant={'danger'}>{ statusMessage }</Alert>
      }
    </div>
  );
}

export { Login };
