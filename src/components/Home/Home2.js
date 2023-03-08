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
      style={{ background: "rgb(207 251 243)" }}
    >
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1
              style={{
                fontSize: "2.6em",
                color: "black",
                fontFamily: "cursive",
              }}
            >
              LET ME{" "}
              <span style={{ color: "red", fontWeight: "700" }}>
                {" "}
                INTRODUCE{" "}
              </span>{" "}
              MYSELF
            </h1>
            <p className="home-about-body" style={{ color: "black" }}>
              Hello, my name is Pawan Singh and I am a skilled full stack web
              developer with expertise in both frontend and backend
              technologies.
              <br />I possess a strong foundation in programming languages such
              as{" "}
              <i>
                <b style={{ color: "red" }}>
                  HTML, CSS, JavaScript, and frameworks such as React for
                  frontend development, as well as Node.js and Express for
                  backend development.
                </b>
              </i>
              <br />
              I am eager to learn and grow my skills while delivering
              high-quality and efficient solutions to clients. I have excellent
              problem-solving skills and attention to detail, which allows me to
              create user-friendly web applications that meet the needs of
              businesses and their customers.
              <br />I am committed to staying up-to-date with the latest
              technologies and industry trends to ensure that I deliver the most
              effective solutions.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt style={{ borderRadius: "10px" }}>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        {/* <Row>
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
        </Row> */}
      </Container>
    </Container>
  );
}
export default Home2;
