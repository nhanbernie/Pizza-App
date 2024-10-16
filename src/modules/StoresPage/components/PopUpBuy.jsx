import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function PopUpBuy({ show, onHide, onChoose, product }) {
  return (
    <Modal show={show} onHide={onHide} style={{ color: 'black' }}>
      <Modal.Header closeButton>
        <Modal.Title>Buy {product}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Do you want to buy this {product}?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={onChoose}>
          Buy
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PopUpBuy;
