import React from 'react';
import { Button } from 'react-bootstrap';
import { Modal,
  ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

export const Popup = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const sendAPIRequest = () => {
    instance.get('/lectures')
        .then(function(response) {
          toggle();
          document.getElementById('modal').innerHTML =
            JSON.stringify(response.data, null, 2);
        });
  };

  return (
    <>
      <Button variant="primary" size="lg" onClick={sendAPIRequest}>
        Send API request
      </Button>
      <Button variant="primary" size="lg" onClick={toggle}>
        Toggle modal
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Response</ModalHeader>
        <ModalBody id={'modal'}>
          content here
        </ModalBody>
        <ModalFooter>
          <Button variant="primary" size="lg" onClick={toggle}>
            Do Something
          </Button>{' '}
          <Button variant="secondary" size="lg" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
