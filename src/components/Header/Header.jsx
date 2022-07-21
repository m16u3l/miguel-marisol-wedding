import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import './header.css';

export default function Header() {
	return (
		<header id="fh5co-header" className="fh5co-cover" role="banner">
			<div className="overlay"></div>
			<Container>
				<Row>
					<Col>
						<div className="display-t">
							<div className="display-tc animate-box" data-animate-effect="fadeIn">
								<h1>Miguel y Marisol</h1>
								<h2>¡Nos casamos!</h2>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</header >
	)
}
