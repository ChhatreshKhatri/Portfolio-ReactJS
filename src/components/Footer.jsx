import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Socialicon from "./Socialicon";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center name-copyright">
          <Col sm={true} className="text-sm-start">
            <div className="nameGradient">
              <span> CHHATRESH KHATRI</span>
            </div>
            <p>&copy; 2023 Copyright by Chhatresh Khatri.</p>
          </Col>
          <Col sm={true} className="text-center text-sm-end">
            <Socialicon />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
export default Footer;