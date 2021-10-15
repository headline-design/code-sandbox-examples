import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ModalsShowcase: React.FC = () => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Modal</Button>}
      {/*
    // @ts-ignore */}
      <Modal show={show} onClose={() => toggleShow(false)}>
        <Modal.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </Modal.Header>
        <Modal.Body>Hello, world! This is a Modal message.</Modal.Body>
      </Modal>
    </>
  );
};

export default ModalsShowcase;
