import React, { useState } from 'react';
import { Col, Row, Form } from 'react-bootstrap';

const BookingForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleAddName = (e) => {
        setName(e.target.value);
    };

    const handleAddEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = () => {
        if (name.trim() !== "" && email.trim() !== "") {
            alert('Send form successfully');
        } else {
            alert('error');
        }
    };

    return (
        <>
            <Row className='text-center mb-5'>
                <h2>Book Your Table</h2>
            </Row>
            <Row className="g-2">
                <Col md>
                    <Form.Control onChange={handleAddName} type="text" placeholder="Your name*" />
                </Col>
                <Col md>
                    <Form.Control onChange={handleAddEmail} type="email" placeholder="Your email" />
                </Col>
                <Col md>
                    <Form.Select aria-label="Floating label select example">
                        <option>Select a service</option>
                        <option value="1">Order</option>
                        <option value="2">Fastly</option>
                        <option value="3">Ship</option>
                    </Form.Select>
                </Col>
            </Row>

            <div className="row mt-3">
                <div className="mb-2">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Please enter your comment"></textarea>
                </div>
            </div>

            <div className="row col-xl-2 mb-5 row-cols-1 p-2">
                <button className="btn btn-warning text-white button-send" onClick={handleSubmit}>Send Messages</button>
            </div>
        </>
    );
};

export default BookingForm;
