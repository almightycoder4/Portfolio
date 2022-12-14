import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container
      fluid
      className="home-about-section"
      id="about"
      style={{ background: "#ffdbdb" }}
    >
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", color: "black" }}>
              LET ME{" "}
              <span style={{ color: "red", fontWeight: "700" }}>
                {" "}
                INTRODUCE{" "}
              </span>{" "}
              MYSELF
            </h1>
            <p className="home-about-body" style={{ color: "black" }}>
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b style={{ color: "red" }}>
                  {" "}
                  JAVA, HTML, CSS, JavaScript and React.{" "}
                </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b style={{ color: "red" }}>Web Technologies and Products </b>{" "}
                and also in areas related to{" "}
                <b style={{ color: "red" }}>Full Stack Web Development.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b style={{ color: "red" }}>Node.js</b> and
              <i>
                <b style={{ color: "red" }}>
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b style={{ color: "red" }}> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt style={{ borderRadius: "10px" }}>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 style={{ color: "black" }}>FIND ME ON</h1>
            <p style={{ color: "black" }}>
              Feel free to <span style={{ color: "red" }}>connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/almightycoder4"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/pawanmau01"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/pawan-singh-a4b309245/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/pawanmau01"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
