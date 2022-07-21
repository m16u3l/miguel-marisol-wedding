import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './nav.css';

export default function Header() {
  return (
    <nav className="fh5co-nav" role="navigation">
      <Container>
        <Row>
          <Col md={3} className="col-xs-3">
            <div id="fh5co-logo">Nuestra Boda</div>
          </Col>
          <Col md={9}>
          </Col>
        </Row>
      </Container>
    </nav>
  )
}
