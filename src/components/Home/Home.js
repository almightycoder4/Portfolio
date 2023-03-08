import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.gif";
import Home2 from "./Home2";
import Type from "./Type";
import About from "../About/About";
function Home() {
  return (
    <section>
      <Container
        fluid
        className="home-section"
        id="home"
        style={{ background: "rgb(207 251 243)" }}
      >
        <Container className="home-content">
          <Row>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "550px" }}
              />
            </Col>
            <Col md={7} className="home-header">
              <h1
                style={{ paddingBottom: 15, color: "black" }}
                className="heading"
              >
                Hello There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name" style={{ color: "crimson" }}>
                I'M
                <strong style={{ color: "crimson" }}> PAWAN SINGH</strong>
              </h1>

              <div style={{ padding: 30, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <About />
    </section>
  );
}

export default Home;
