import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Certificate from '../components/Certificate';
import '../App.css';
import myPicture from '../assets/logo.png'; // Include your picture here

function Home() {
    let navigate = useNavigate(); // useNavigate is a function that returns the navigate function when called

    const certificates = [
        { title: 'Certificate 1', imageUrl: '../assets/certificate-1.jpg' },
        { title: 'Certificate 2', imageUrl: '../assets/certificate-2.jpg' },
        // add more certificates here...
    ];

    const navigateTo = (page) => {
        navigate(`/${page}`);
    }
    
    return (
        <Container>
            <Row className="welcome-section">
                <h1>Welcome to my Website</h1>
            </Row>
            
            <Row className="about-section">
                <Col md={6}>
                    <h2>About Me</h2>
                    <p className="about-text">
                        {/* Add your description here */}
                    </p>
                </Col>
                <Col md={6} className="about-image">
                    <img src={myPicture} alt="Your name" />
                </Col>
            </Row>

            <Row className="education-section">
                <h2>My Coding Education</h2>
                <ul className="certificate-list">
                    {certificates.map((certificate, idx) => (
                        <Certificate key={idx} title={certificate.title} imageUrl={certificate.imageUrl} />
                    ))}
                </ul>
            </Row>

            <Row className="navigation-section">
                <Button variant="primary" className="projects-button" onClick={() => navigateTo('projects')}>View Projects</Button>
                <Button variant="secondary" className="contact-button" onClick={() => navigateTo('contact')}>Contact Me</Button>
            </Row>
        </Container>
    );
}

export default Home;
