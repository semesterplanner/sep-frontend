import React from 'react';
import { Button } from 'react-bootstrap';
import './Login.css';
import { handleOIDCLogin } from '../../helper/login';

export const Login = () => {
  return (
    <>
      <text className="textfield">
        Bitte nutzen Sie den HPI OpenID Connect Login.
      </text>
      <Button id="login" variant="primary" size="lg" onClick={handleOIDCLogin}>
        Login
      </Button>
    </>
  );
};
