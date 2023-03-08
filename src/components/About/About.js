import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Github from "./Github";
import Techstack from "./Techstack";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Projects from "../Projects/Projects";
function About() {
  return (
    <Container
      fluid
      className="about-section"
      style={{ background: "rgb(207 251 243)" }}
    >
      <h1 className="project-heading">
        <strong className="purple">{"< Skillset, I have />"} </strong>
      </h1>
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Techstack />
          <Col
            md={5}
            style={{ paddingTop: "10px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <h1 className="project-heading">
          <strong className="purple">{"< Tools, I use />"}</strong>
        </h1>
        <Toolstack />
      </Container>
      <Projects></Projects>
      <Github />
    </Container>
  );
}

export default About;
