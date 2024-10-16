import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from "../../../store/actions/authActions";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { CSSTransition } from 'react-transition-group';
import "../styles/LoginPopUp.css"; // Đảm bảo giữ lại CSS của bạn

const LoginPopUp = (props) => {
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        if (isChecked) {
            dispatch(loginRequest(email, password));
            props.onHide(); // Đóng modal sau khi đăng nhập
        }
    };

    return (
        <CSSTransition
            in={props.show}
            timeout={600}
            classNames="modal-fancy"
            unmountOnExit
        >
            <Modal
                className="container-popup-signin"
                style={{ color: 'black', backgroundColor: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(3px)' }}
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <h4>Pizza App</h4>
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check
                                type="checkbox"
                                label="Check me out"
                                checked={isChecked}
                                onChange={() => setIsChecked(!isChecked)}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" disabled={!isChecked || loading}>
                            {loading ? 'Loading...' : 'Submit'}
                        </Button>

                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </Form>
                </Modal.Body>
            </Modal>
        </CSSTransition>
    );
};

export default LoginPopUp;
