import React, { useState, useEffect } from 'react';
import { history } from '../../_helpers/history';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import { userService } from '../../_services/userService';

function SignUp() {
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
    userService.signup(username, password).then((data) => {
      if (data.errors) {
        if (data.errors.password) {
          setStatusMessage("Password errors");
          setHasError(true);
        }
        if (data.errors.username) {
          setStatusMessage("Username errors");
        }
      } else {
        setHasError(false);
        localStorage.setItem('jwt', data.token);
        history.push('/');
      }
    });
  }

  useEffect(() => {
  }, []);

  return (
    <div className="col-lg-8 offset-lg-2">
      <Breadcrumb>
        <Breadcrumb.Item active>Signup</Breadcrumb.Item>
        <Breadcrumb.Item href="/login">Log In</Breadcrumb.Item>
      </Breadcrumb>
      <Form name="form">
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" id="username" placeholder="username" aria-label="Username" onChange={handleUsernameChange} value={username} autoFocus />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" id="password" placeholder="password" aria-label="Password" onChange={handlePasswordChange} value={password} />
        </Form.Group>
          
        <Button onClick={() => handleSubmit()} variant="outline-primary">Sign Up</Button>
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

export { SignUp };
