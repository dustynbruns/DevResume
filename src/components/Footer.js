import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="footer mt-auto py-3 bg-dark">
            <Container>
                <Row>
                    <Col className="text-center text-white">
                        &copy; {new Date().getFullYear()} Dustyn Bruns -- Engineer.
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
