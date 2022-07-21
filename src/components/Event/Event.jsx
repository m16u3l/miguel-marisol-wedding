import React from "react";
import { Container, Row } from "react-bootstrap";
import "./event.css"

export default function Event() {
  return (
    <div id="fh5co-event" className="fh5co-bg">
      <div className="overlay"></div>
      <Container>
        <Row>
          <div className="text-center fh5co-heading animate-box">
            <span>Nuestros eventos especiales</span>
            <h2>Eventos de la Boda</h2>
          </div>
        </Row>
        <Row>
          <div className="col-md-6 col-sm-6 text-center">
            <div className="event-wrap animate-box">
              <h3>ceremonia religiosa</h3>
              <div className="event-col">
                <i className="icon-clock"></i>
                <span>3:00 PM</span>
                <span>4:30 PM</span>
              </div>
              <div className="event-col">
                <i className="icon-calendar"></i>
                <span>Domingo 18</span>
                <span>Septiembre, 2022</span>
              </div>
              <p>Nada</p>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 text-center">
            <div className="event-wrap animate-box">
              <h3>Recepcion</h3>
              <div className="event-col">
                <i className="icon-clock"></i>
                <span>5:00 PM</span>
                <span>8:30 PM</span>
              </div>
              <div className="event-col">
                <i className="icon-calendar"></i>
                <span>Domingo 18</span>
                <span>Septiembre, 2022</span>
              </div>
              <p>Nada</p>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  )
}