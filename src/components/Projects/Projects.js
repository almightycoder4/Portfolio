import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";
import nyka from "../../Assets/Projects/nykaa.png";
import shop from "../../Assets/Projects/shop.com.png";
import appfoody from "../../Assets/Projects/appfoody.png";
import zostel from "../../Assets/Projects/zostel.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "rgb(4 23 239 / 69%)" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zostel}
              isBlog={false}
              title="Zostel-Clone"
              description="A pioneer of the new-age travel culture in India, Zostel is also the world's largest backpacker hostel chain. Stay with us at 60+ destinations across India and Nepal, exploring remote locations, remote parts of famous locations, and unconventional experiences on your holiday."
              aboutproject="A collaborative project, built in 4 days by a team of 5 developers."
              ghLink="https://github.com/DenishFuletra/zostel-clone"
              demoLink="https://zostel.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nyka}
              isBlog={false}
              title="Nykaa-Clone"
              description="Nykaa is a beauty retail company that sells cosmetic commodities and fashion products, including men's innerwear, both online and offline. The company also offers comprehensive content that includes product reviews, beauty how-to videos, expert-written articles, and even an e-beauty magazine. "
              aboutproject="A collaborative project, built in 4 days by a team of 5 developers."
              ghLink="https://github.com/almightycoder4/nykaa-clone"
              demoLink="https://nyka.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shop}
              isBlog={false}
              title="Shop.Com-Clone"
              description="SHOP.COM is a new kind of shopping comparison site that offers the most comprehensive shopping experience on the web. Our shopping experts have drawn on their industry experience and insider connections to bring you the best collection of the stores you can't live without, and the brands and products you love - all in one place. "
              aboutproject="A collaborative project, built in 4 days by a team of 5 developers."
              ghLink="https://github.com/almightycoder4/project-shop.com"
              demoLink="https://shop-com-0.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={appfoody}
              isBlog={false}
              title="App Foody"
              description="App Foody is a dynamic website where user can search his/her favourite food recipe and learn about their ingredients and methods of cooking by reading my blog or watching related video. "
              aboutproject="It's my Personal Project."
              ghLink="https://github.com/almightycoder4/App-Foody"
              demoLink="https://appfoody.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
