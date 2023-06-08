import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Certificate from '../components/Certificate';
import '../App.css';
import myPicture from '../assets/logo.png';
import BootstrapCert from '../assets/Bootstrap.png';
import FullStackHonorsCert from '../assets/Full-Stack-Honors.png';
import NodeExpressMongoCert from '../assets/Node-Express-Mongo.png';
import ReactNativeCert from '../assets/React-Native.png';
import ReactCert from '../assets/React.png';

function Home() {
    let navigate = useNavigate();

    const certificates = [
        { title: 'Bootstrap', imgUrl: BootstrapCert },
        { title: 'Full Stack Honors', imgUrl: FullStackHonorsCert },
        { title: 'Node, Express, Mongo', imgUrl: NodeExpressMongoCert },
        { title: 'React Native', imgUrl: ReactNativeCert },
        { title: 'React', imgUrl: ReactCert },
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
                        Hello! I'm Dustyn Bruns, a committed Software Engineer and a Freelance Developer based in Amarillo, Texas. I began my career in a completely different realm - as a Heavy Equipment Operator at 3-B Farms. There, I was entrusted with the responsibility of maintaining machines, navigating sophisticated planting/harvesting computer systems, and leading my own crew to ensure task completion. This experience endowed me with a strong work ethic, leadership skills, and the ability to grasp complex systems rapidly.

                        My journey into the world of web development began in 2023 when I completed a Full-Stack Web Development program at NuCamp. This rigorous training equipped me with an in-depth understanding of both front-end and back-end development, and made me proficient in a wide range of technologies, including but not limited to, HTML5, CSS3, React, JSX, and Git.

                        Today, as a Freelance Developer, I offer services on Fiverr, specializing in creating websites, blogs, and mobile applications with a focus on front-end development. I continuously strive to enhance my skills and learn new technologies to provide innovative solutions to my clients.

                        I invite you to explore my portfolio of projects on Github and connect with me if you have any opportunities or queries!
                    </p>

                </Col>
                <Col md={6} className="about-image">
                    <img src={myPicture} alt="Your name" />
                </Col>
            </Row>

            <Row className="education-section">
                <h2>Education and Certificates</h2>
                <p className="education-text">
                    At NuCamp, I underwent a comprehensive Full-Stack Web Development program where I grasped the intricacies of both front-end and back-end development. The coursework encompassed key web technologies like HTML, CSS, React, JSX, and Git. The training also honed my problem-solving skills and instilled the best coding practices in me. The certificates displayed below are a testament to the knowledge and skills I have gained during this program.
                </p>
                <div className="certificate-list">
                    {certificates.map((certificate, idx) => (
                        <Certificate key={idx} title={certificate.title} imgUrl={certificate.imgUrl} />
                    ))}
                </div>
            </Row>


            <Row className="navigation-section">
                <Button variant="primary" className="projects-button" onClick={() => navigateTo('projects')}>View Projects</Button>
                <Button variant="secondary" className="contact-button" onClick={() => navigateTo('contact')}>Contact Me</Button>
            </Row>
        </Container>
    );
}

export default Home;


