import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const ExampleModal: React.FunctionComponent = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Modal</Button>}
      <Modal show={show} onClose={() => toggleShow(false)}>
        <Modal.Header>
          <strong className="mr-auto">React-Bootstrap</strong>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
};

const App = () => (
  <Container className="p-3">
    <Jumbotron>
      <h1 className="header">Welcome To React-Bootstrap</h1>
      <ExampleModal>
        We now have Modals
        <span role="img" aria-label="tada">
          🎉
        </span>
      </ExampleModal>
    </Jumbotron>
  </Container>
);

const mountNode = document.getElementById('root');
ReactDOM.render(<App />, mountNode);
