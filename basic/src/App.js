import React, { useState } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import './App.css';

const ExampleModal = ({ children }) => {
  const [show, toggleShow] = useState(false);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>AlgoPay</Button>}
      <Modal show={show} onClose={() => toggleShow(false)}>
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">AlgoPay</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Are you sure you want to connect to MyAlgo?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Continue</button>
      </div>
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

export default App;
