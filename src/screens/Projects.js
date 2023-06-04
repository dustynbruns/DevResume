import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { Container, Row, Col, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
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

  return (
    <Container>
      <Row className="justify-content-md-center">
        <h1>My Projects</h1>
        <p>You can access the code for these projects on my GitHub profile.</p>
      </Row>
      <Row xs={1} md={2} className="g-4">
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
                <Card className="h-100">
                  <Card.Img variant="top" src={`https://raw.githubusercontent.com/${project.owner.login}/${project.name}/master/snapshot.png`} />
                  <Card.Body>
                    <Card.Title>{project.name}</Card.Title>
                  </Card.Body>
                </Card>
              </OverlayTrigger>
            </a >
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;

