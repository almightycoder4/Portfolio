import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiReact,
  DiNodejs,
  DiMongodb,
  DiJava,
  DiHtml5,
  DiBootstrap,
  DiJavascript1,
  DiCss3,
} from "react-icons/di";
import { SiChakraui, SiExpress } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <h5>Java</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h5>JavaScript</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <h5>HTML5</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <h5>CSS3</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
        <h5>Bootstrap</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h5>Node.js</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h5>React</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h5>MongoDB</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <h5>Express.js</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiChakraui />
        <h5>Chakra UI</h5>
      </Col>
    </Row>
  );
}

export default Techstack;
