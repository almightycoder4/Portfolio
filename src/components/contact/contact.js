import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiOutlineHome,
  AiOutlineIdcard,
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
// import Particle from "../Particle";

const Contact = () => {
  return (
    <Container fluid className="about-section">
      {/* <Particle /> */}
      <div>
        <div
          style={{
            margin: "auto",
            width: "350px",
            background: "#623686",
            color: "white",
            borderRadius: "10px",
            marginTop: "5%",
          }}
        >
          <h2>Contact Me</h2>
        </div>
        <div>
          <div style={{ marginTop: "3%" }}>
            <h5>
              <AiOutlineIdcard /> Pawan Singh
            </h5>
            <h5>
              <AiOutlineHome /> Brahmsthan, Sahadatpura, Mau, Uttar
              Pradesh(India) - 275101
            </h5>
            <h5>
              <AiOutlineWhatsApp /> +91-9695232973
            </h5>
            <h5>
              <AiOutlineMail />: almightycoder4@gmail.com
            </h5>
          </div>
          <div style={{ marginTop: "5%", marginBottom: "6%" }}>
            <h4>Get Me On Social Platform</h4>
            <Row>
              <Col md={12} className="home-about-social">
                <p>
                  Feel free to <span className="purple">connect </span>with me
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
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
