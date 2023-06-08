import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { Container, Col, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { fadeInOnScroll } from '../components/ScrollAnimation'; 

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('http://localhost:3001/projects');
                setProjects(response.data);
            } catch (error) {
                console.error('Failed to fetch projects:', error);
            }
        };

        fetchProjects();
    }, []);

    useEffect(() => {
        fadeInOnScroll();
    }, []);

    return (
        <Container>
            <Col className="page-title section-animation">
            <div>
                <h1>My Projects</h1>
                <br />
                <p className='projects-text'>Here are some of my projects! Click on any one of the projects that you would like to see, and you will be navigated to my Github Repository!</p>
                </div>
            </Col>
            <div xs={1} md={2} className="projects-container section-animation">
                {projects.map((project, idx) => (
                    <Col key={idx}>
                        <a href={project.html_url} target="_blank" rel="noreferrer">
                            <OverlayTrigger
                                overlay={
                                    <Tooltip id={`tooltip-${idx}`}>
                                        <ReactMarkdown>{project.readme}</ReactMarkdown>
                                    </Tooltip>
                                }
                            >
                                <Card className='project-card'>
                                    <Card.Img 
                                        className='proj-img'
                                        variant="top"
                                        src={`https://raw.githubusercontent.com/${project.owner.login}/${project.name}/master/snapshot.png`}
                                        />
                                    <Card.Body>
                                        <Card.Title className='project-title'>{project.name}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </OverlayTrigger>
                        </a >
                    </Col>
                ))}
            </div>
        </Container>
    );
}

export default Projects;

