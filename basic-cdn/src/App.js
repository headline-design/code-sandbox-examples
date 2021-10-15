import React, { useState } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';

import './App.css';

const ExampleModal = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <Modal show={show} onClose={() => toggleShow(!show)}>
      <Modal.Header>
        <strong className="mr-auto">React-Bootstrap</strong>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
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

export default App;
