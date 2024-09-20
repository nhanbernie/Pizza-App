import React, { Component } from 'react'
import { Col, FloatingLabel, Row, Form, Container } from 'react-bootstrap'


export class BookingForm extends Component {

    constructor() {
        super()
        this.state = ({
            name: "",
            email: "",
            select: "",
            dis: ""
        })
    }

    handleAddName = (e) => {
        this.setState(
            {
                name: e.target.value
            }
        )
    }

    handleAddEmail = (e) => {
        this.setState(
            {
                email: e.target.value
            }
        )
    }

    handleSubmit = () => {
        const { name, email } = this.state
        if (name.trim() !== "" && email.trim() !== "") {
            alert('Send form successfully')
        }
        else {
            alert('error')
            // <>
            //     <div class="alert alert-danger" role="alert">
            //         A simple danger alert—check it out!
            //     </div>
            // </>
        }
    }

    render() {
        return (
            <>
                <Container>
                    <Row className='text-center mb-5'>
                        <h2>Book Your Table</h2>
                    </Row>
                    <Row className="g-2">
                        <Col md>
                            <Form.Control onChange={this.handleAddName} type="email" placeholder="Your name*" />
                        </Col>
                        <Col md>
                            <Form.Control onChange={this.handleAddEmail} type="email" placeholder="Your email" />
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

                    <div class="row mt-3">
                        <div class="mb-2">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Please enter your comment"></textarea>
                        </div>
                    </div>

                    <div class="row col-xl-2 mb-5 row-cols-1 p-2">
                        <button class="btn btn-warning text-white button-send" onClick={this.handleSubmit}>Send Messages</button>
                    </div>
                </Container>
            </>
        )
    }
}

export default BookingForm