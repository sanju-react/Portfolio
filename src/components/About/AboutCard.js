import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Ramashankar Pandey </span>
            from <span className="purple"> Surat, India.</span>
            <br />I am currently intern as a React.js Developer at{" "}
            <a
              className="purple text-decoration-none"
              href="https://thediamondport.com/"
              rel="noreferrer"
              target="_blank"
            >
              The Diamond Port
            </a>{" "}
            .
            <br />I have completed Integrated BCA in Web Development at{" "}
            <a
              className="purple text-decoration-none"
              rel="noreferrer"
              href="https://www.vnsgu.ac.in/"
              target="_blank"
              title="Veer Narmad South Gujarat University"
            >
              VNSGU
            </a>
            .
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code with purpose, craft with passion!"{" "}
          </p>
          <footer className="blockquote-footer">
            <a
              href="https://in.linkedin.com/in/pandey-ramashankar"
              className="fw-bold purple text-decoration-none"
              target="_blank"
              rel="noreferrer"
            >
              Pandey Ramashankar
            </a>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
