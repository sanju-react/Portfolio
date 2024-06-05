import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";

import project_management from "../../Assets/Projects/Project-management.png";

import apex_college from "../../Assets/Projects/apex-college.png";
import ring_builder from "../../Assets/Projects/Ring-Builder.png";

// import suicide from "../../Assets/Projects/suicide.png";
// import project_management from "../../Assets/Projects/project-management-tool.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={apex_college}
              isBlog={false}
              title="APEX-COLLEGE"
              description="The Apex College Management System is a web-based application that aims to simplify and enhance the management of a college's day-to-day operations. It covers a wide range of functionalities, including student enrollment, course management, attendance tracking, grading, and more. The intuitive user interface ensures ease of use for both administrators and students."
              ghLink="https://github.com/sanju-react/Apex-College"
              demoLink="https://apex-college-e05b9.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project_management}
              isBlog={false}
              title="Project Management"
              description="The aim of this project is to develop a web-based project management tool that can help users manage their projects from start to finish. The tool will provide features such as task management, collaboration, time tracking, budgeting, reporting, and more. The tool will be user-friendly, secure, and scalable."
              ghLink="https://github.com/sanju-react/Report"
              demoLink="https://report-d00bf.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ring_builder}
              isBlog={false}
              title="Ring-Builder"
              description="During my internship, I developed a website called 'Ring Builder' designed to allow users to create custom rings.  I used HTML, CSS,  JavaScript ReactJS and TailwindCSS for the frontend to ensure a responsive and visually appealing user interface.  The website includes features such as user authentication, a shopping cart, and secure payment integration."
              ghLink="https://github.com/sanju-react/Diamond-and-Gemstone-Ring-Builder"
              demoLink="https://diamond-and-gemstone-ring-builder.vercel.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
