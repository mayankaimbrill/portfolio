import React from "react";
import { Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";

import {
  SiFigma,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiBehance,
  SiLinkedin,
  SiSlack,
  SiMicrosoftteams,
  SiFramer,
  SiSketch,
} from "react-icons/si";

import {
  DiPhotoshop,
} from "react-icons/di";

const tools = [
  { icon: <SiFigma />, name: "Figma" },
  { icon: <SiAdobexd />, name: "Adobe XD" },
  { icon: <SiAdobephotoshop />, name: "Photoshop" },
  { icon: <SiAdobeillustrator />, name: "Illustrator" },
  { icon: <SiBehance />, name: "Behance" },
  { icon: <SiLinkedin />, name: "LinkedIn" },
  { icon: <SiSlack />, name: "Slack" }, // Team comms
  { icon: <SiMicrosoftteams />, name: "Microsoft Teams" }, // Meetings + collab
  { icon: <DiPhotoshop />, name: "Photoshop" }, // Image editing
  { icon: <SiFramer />, name: "Framer" }, // Prototyping
  { icon: <SiSketch />, name: "Sketch" }, // Design tool
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map(({ icon, name }, idx) => (
        <Col xs={4} md={2} className="tech-icons" key={name}>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id={`tooltip-${name}`}>{name}</Tooltip>}
          >
            <span>{icon}</span>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
