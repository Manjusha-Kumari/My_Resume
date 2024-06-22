import React from 'react';
import Header from './components/header/Header';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Education from './components/education/Education';
import Skills from './components/skills/Skills'
import Achievements from './components/achivements/Achievements'
import { Container, Row, Col } from 'reactstrap';
import './App.css';

function App() {
  return (
    <Container className="app-container">
      <Header />
      <Row>
        <Col md={6} className="left-column">
          <Experience />
          <Projects />
        </Col>
        <Col md={6} className="right-column">
          <Education />
          <Skills />
          <Achievements />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
