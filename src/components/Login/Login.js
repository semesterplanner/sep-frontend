import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import instance from '../../axiosConfig';
import './Login.css';
import { handleOIDCLogin } from '../../helper/login';
import { Modal,
  ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

export const Login = () => {

  return (
    <>
      <text class="textfield">
        Bitte nutzen Sie den HPI OpenID Connect Login.
      </text>
      <Button id="login" variant="primary" size="lg" onClick={handleOIDCLogin}>
        Login
      </Button>
    </>
  );
};
