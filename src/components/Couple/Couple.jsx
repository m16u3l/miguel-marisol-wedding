import React from "react";
import { Container, Row, } from "react-bootstrap";
import miguel from '../../assets/images/miguel.png'
import marisol from '../../assets/images/marisol.jpeg'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './couple.css'

export default function Couple() {
  return (
    <div id="fh5co-couple">
      <Container>
        <Row>
          <div className="text-center fh5co-heading animate-box">
            <h2>Hola!</h2>
            <h3>18 de Septiembre de 2022</h3>
            <p>Esta coordialmente invitado a celebrar con nosotros este dia especial</p>
            <div className="simply-countdown simply-countdown-one"></div>
          </div>
        </Row>
        <Row>
          <div className="couple-wrap animate-box">
            <div className="couple-half">
              <div className="groom">
                <img src={miguel} alt="groom" className="img-responsive" />
              </div>
              <div className="desc-groom">
                <h3>Miguel Angel Condori Mamani</h3>
              </div>
            </div>
            <p className="heart text-center"><i className="bi bi-heart-fill"></i></p>
            <div className="couple-half">
              <div className="bride">
                <img src={marisol} alt="groom" className="img-responsive" />
              </div>
              <div className="desc-bride">
                <h3>Esther Marisol Tarqui Taca</h3>
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <div className="text-center fh5co-heading animate-box">
            <a href="https://wa.me/67421246" className="btn btn-default btn-sm"><i className="bi-whatsapp"> Confirmar asistencia</i></a>
          </div>
        </Row>
      </Container>
    </div>
  )
}
