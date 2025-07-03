import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <p className="home-about-body">
              I'm a <b className="purple">UI/UX Designer</b> with <b className="purple">1.5 years of experience</b> crafting intuitive and visually engaging digital products.
              <br />
              <br />
              I specialize in designing clean, functional interfaces for both web and mobile applications using tools like <b className="purple">Figma, Adobe XD, and Illustrator</b>.
              <br />
              <br />
              I’ve worked across <b className="purple">e-commerce, SaaS, and AI-powered platforms</b> — focusing on user research, wireframing, prototyping, and building responsive, developer-ready UIs.
              <br />
              <br />
              Skilled in solving design problems with a <b className="purple">user-first approach</b>, I aim to balance usability with aesthetics, ensuring every product not only looks great but also works seamlessly.
              <br />
              <br />
              Known for my <b className="purple">eye for detail</b>, structured thinking, and ability to collaborate effectively with developers and stakeholders.
            </p>
          </Col>

        </Row>
   
      </Container>
    </Container>
  );
}
export default Home2;
