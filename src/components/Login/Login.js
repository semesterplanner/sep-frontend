import React, { useState } from 'react';
import instance from '../../axiosConfig';
import { Button } from 'react-bootstrap';
import './Login.css';

import { Modal,
  ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Cookies from 'js-cookie';

export const Login = () => {
  const handleOIDCLogin = () => {
    instance.get('/oidc/authenticate/')
        .then((response) => {
          Cookies.set('sessionid', response.data['sessionid'],
              {
                expires: new Date(new Date().getTime() + 2000),
                sameSite: 'lax',
              });
          window.location.assign(response.data['url']);
        })
        .catch(() => {
          alert('Error logging in please try again');
        });
  };

  const handleOIDCLogout = () => {
    // tell backend to log out the user
    instance.post('/oidc/logout/').then();
    // flush our storage regardless of successful backend logout
    window.localStorage.removeItem('access_token');
    window.location.assign('/');
  };

  const sendAPIRequest = () => {
    instance.get('/lectures')
        .then(function(response) {
          toggle();
          document.getElementById('modal').innerHTML =
            JSON.stringify(response.data, null, 2);
        });
  };


  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);


  return (
    <>
      <text class="textfield">
        Bitte nutzen Sie den HPI OpenID Connect Login.
      </text>
      <ButtonGroup class="buttonGroup" vertical={true} >
        <Button variant="primary" size="lg" onClick={handleOIDCLogin}>
          Login with HPI OpenID Connect
        </Button>
        <Button variant="primary" size="lg" onClick={handleOIDCLogout}>
          Logout with HPI OpenID Connect
        </Button>
        <Button variant="primary" size="lg" onClick={sendAPIRequest}>
          Send API request
        </Button>
        <Button variant="primary" size="lg" onClick={toggle}>
          Toggle modal
        </Button>
      </ButtonGroup>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Response</ModalHeader>
        <ModalBody id={'modal'}>
          content here
        </ModalBody>
        <ModalFooter>
          <Button variant="primary" size="lg" onClick={toggle}>Do Something</Button>{' '}
          <Button variant="secondary" size="lg" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
