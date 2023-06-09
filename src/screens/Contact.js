import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { fadeInOnScroll } from '../components/ScrollAnimation'; 

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
        axios.post('http://DevResServer.us-west-1.elasticbeanstalk.com/contact', { name, email, message })
            .then((response) => {
                setStatus({ message: "Email sent successfully!", type: "success" });
            }, (error) => {
                setStatus({ message: "Error in sending email", type: "danger" });
            });
    }

    useEffect(() => {
        fadeInOnScroll();
    }, []);

    return (
        <Container fluid className="contact-container">
            <div className="contact-section section-animation">
                <Row>
                    <Col md={8} className="mx-auto">
                        <h2 className="contact-title">Contact Me</h2>
                        <p className="contact-text">
                            Thank you for visiting my site! If you have any questions, would like to discuss a potential project, or are interested in my services as a developer, please feel free to get in touch. I'm always open to new opportunities and eager to tackle new challenges. I'm looking forward to hearing from you!
                        </p>
                    </Col>
                </Row>
            </div>
            <div className="contact-form section-animation">
                <Form onSubmit={submitForm}>
                    <Form.Group className="form-group">
                        <Form.Label className="form-label">Name:</Form.Label>
                        <Form.Control className="form-control" type="text" value={name} onChange={e => setName(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="form-group">
                        <Form.Label className="form-label">Email:</Form.Label>
                        <Form.Control className="form-control" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="form-group">
                        <Form.Label className="form-label">Message:</Form.Label>
                        <Form.Control className="form-control" as="textarea" value={message} onChange={e => setMessage(e.target.value)} required />
                    </Form.Group>
                    <Button className="submit-button" variant="primary" type="submit">Send</Button>
                </Form>
                {status && <Alert className={`status-alert status-${status.type}`} variant={status.type}>{status.message}</Alert>}
            </div>
        </Container>
    );
}

export default Contact;
