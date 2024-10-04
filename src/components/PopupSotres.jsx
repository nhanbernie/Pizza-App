import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { useHome } from '../hooks/useHome';

function PopupSotres({ show, onHide }) {
  const { items, handleIncrease, handleDecrease } = useHome(); // Lấy danh sách items và hàm từ context

  return (
    <Modal show={show} style={{ color: 'black' }} onHide={onHide} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          My Stores
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Container>
          {Object.keys(items).length === 0 ? (
            <Row>
              <Col xs={12}>
                <p>No items in your store.</p>
              </Col>
            </Row>
          ) : (
            Object.keys(items).map((key, index) => (
              <Row key={index} className="align-items-center">
                <Col xs={4}>
                  {items[key].name} {/* Tên sản phẩm */}
                </Col>
                <Col xs={2}>
                  {items[key].quantity} {/* Số lượng sản phẩm */}
                </Col>
                <Col xs={2}>
                  <Button variant="outline-primary" onClick={() => handleIncrease(key)}>+</Button>
                </Col>
                <Col xs={2}>
                  <Button variant="outline-danger" onClick={() => handleDecrease(key)}>-</Button>
                </Col>
                <Col xs={3}>
                  {(items[key].price * items[key].quantity).toFixed(2)}$ {/* Tổng giá */}
                </Col>
              </Row>
            ))
          )}
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PopupSotres;