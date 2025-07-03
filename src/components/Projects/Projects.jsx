import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import destinova from "../../Assets/Projects/destinova.png";

import weupsell from "../../Assets/Projects/weupsell.png";
import capsole from "../../Assets/Projects/capsole.png";
import foodpos from "../../Assets/Projects/foodpos.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={destinova}
              title="Destinova AI ChatBot"
              description="Shopify App – AI-powered customer support & sales assistant Designed the complete user interface for an AI chatbot app built for Shopify merchants. The chatbot helps automate product recommendations, order tracking, and 24/7 customer support. Focused on creating a seamless onboarding flow, an intuitive live chat panel, and scalable UI for varied merchant needs."
              demoLink="https://destinovaailabs.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weupsell}
              title="WeUpsell – AI-Generated Popups"
              description="Website widget – Smart upselling and revenue growth tool Led the full UI/UX design of an AI-based popup builder that helps e-commerce websites increase sales through automated, behavior-driven popups. Designed the flow for popup creation, targeting rules, analytics dashboard, and template customization. Balanced usability with visual appeal to support conversion-focused merchants."
              demoLink="https://weupsell.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={capsole}
              isBlog={false}
              title="Capsole Store"
              description="E-commerce website – Product-focused, modern shopping experience Designed the complete UI for an online store offering a curated selection of lifestyle and tech products. Focused on clean layout, product discoverability, and responsive design for smooth shopping on both desktop and mobile."
              demoLink="https://capsolestore.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodpos}
              isBlog={false}
              title="Food POS"
              description="Designed the full UI/UX for a point-of-sale system tailored for restaurants and cafes. The system supports order management, table tracking, billing, and kitchen operations. Focused on creating a responsive interface that simplifies staff workflows across desktop and mobile. Designed intuitive navigation, clear data displays, and consistent UI patterns to improve efficiency for both front-of-house and back-office teams."
              demoLink="https://play.google.com/store/apps/details?id=com.microtech.microtechcaptain.posCloud&hl=en_IN" 
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
