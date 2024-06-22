import React from 'react';
import { Row, Col } from 'reactstrap';
import './Header.css';

const Header = () => {
  return (
    <header>
      <Row>
        <Col md={8} className="left-column">
          <h1>Manjusha Kumari</h1>
          <p className="objective">A highly motivated and results-driven computer science student with a strong foundation in programming, algorithms, and software development. Seeking an internship opportunity to apply my skills and contribute to innovative projects.</p>
        </Col>
        <Col md={4} className="right-column">
          <div className="contact-info">
            <p>Email:manjushatyagi17@gmail.com</p>
            <p>Phone:+91 9431498354</p>
            <p>LinkedIn:<a href="www.linkedin.com/in/manjusha-kumari-94636227a">Manjusha Kumari</a></p>
            <p>GitHub:<a href="https://github.com/Manjusha-Kumari">Manjusha-Kumari</a></p>
            <p>Website:<a href="https://manjusha-kumari.github.io/Portfolio/">Link</a></p>
          </div>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
