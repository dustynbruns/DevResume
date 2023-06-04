import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Alert } from 'react-bootstrap';

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/contact', { name, email, message })
            .then((response) => {
                setStatus({message: "Email sent successfully!", type: "success"});
            }, (error) => {
                setStatus({message: "Error in sending email", type: "danger"});
            });
    }

    return (
        <Container>
            <h1>Contact Me</h1>
            <Form onSubmit={submitForm}>
                <Form.Group>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" value={name} onChange={e => setName(e.target.value)} required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Message:</Form.Label>
                    <Form.Control as="textarea" value={message} onChange={e => setMessage(e.target.value)} required/>
                </Form.Group>
                <Button variant="primary" type="submit">Send</Button>
            </Form>
            {status && <Alert variant={status.type}>{status.message}</Alert>}
        </Container>
    );
}

export default Contact;

  