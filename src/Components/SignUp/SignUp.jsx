import React, { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import { userService } from '../../_services/user.service';

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
    userService.register(username).then((data) => {
      if (data.id) {
        setUsername('');
        setHasError(false);
        setStatusMessage("User successfully created");
        
      } else if (data.username[0] === "has already been taken") {
        setStatusMessage("User name has already been taken");
        setHasError(true);
      }
      else {
        setStatusMessage("An error has ocurred");
        setHasError(true);
      }
    });
  }

  useEffect(() => {
  }, []);

  return (
    <div className="col-lg-8 offset-lg-2">
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Sign Up</Breadcrumb.Item>
      </Breadcrumb>
      <Form name="form">
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control id="username" placeholder="username" aria-label="Username" onChange={handleUsernameChange} value={username} autoFocus />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control id="password" placeholder="password" aria-label="Password" onChange={handlePasswordChange} value={password} />
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
