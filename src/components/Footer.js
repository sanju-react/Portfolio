import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>
            Designed and Developed by{" "}
            <a
              href="https://www.linkedin.com/in/pandey-ramashankar/"
              className="fw-bold purple text-decoration-none"
              target="_blank"
              rel="noreferrer"
            >
             Pandey Ramashankar
            </a>
          </h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>
            Copyright © {year}{" "}
            <a
              href="https://github.com/sanju-react"
              className="fw-bold purple text-decoration-none"
              target="_blank"
              rel="noreferrer"
            >
            RP
            </a>{" "}
          </h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/sanju-react"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://x.com/Rama1302Pandey"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
             <AiOutlineTwitter/>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/pandey-ramashankar/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/_sanju_pandey_09/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
