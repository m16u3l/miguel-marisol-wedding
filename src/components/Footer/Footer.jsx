import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './footer.css'

export default function Footer() {
  return (
    <footer id="fh5co-footer">
      <Container>
        <Row>
          <Col md={12} className="text-center">
            <div>
              <small className="block">Designed by Miguel Condori y Marisol Tarqui</small>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
