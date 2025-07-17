import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import myImg from "../../Assets/avatar.png";
function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={8} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> BRIJESH SANGANI</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
              <Col md={4} style={{ paddingBottom: 20, display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img
                src={myImg}
                alt="home pic"
                className="img-fluid"
              />
            </Col>

         
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
