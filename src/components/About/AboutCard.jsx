import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I’m <span className="purple">Brijesh Sangani</span> from{" "}
            <span className="purple">Gujarat, India</span>.
            <br />
            <br />
            <strong>🏡</strong> Nagadiya, Junagadh, Gujarat – 362215
            <br />
            <strong>📍</strong> Bapunagar, Ahmedabad, Gujarat – 382350
            <br />
            <br />
            <span className="purple">🎨</span> I’m a passionate{" "}
            <strong className="purple">UI/UX Designer</strong> with{" "}
            <strong className="purple">1.5 years of experience</strong> creating
            user-friendly, visually appealing digital products. I specialize in
            designing for web and mobile platforms — focusing on clean layouts,
            intuitive flows, and consistent user experiences that align with
            product goals.
            <br />
            <br />
            I enjoy working across the full design process — from wireframes and
            prototypes to final UI handoff — while collaborating with developers
            and stakeholders to bring ideas to life.
            <br />
            <br />
            💬 Outside of work, I enjoy:
          </p>
          <ul>
            {[
              "Observing great product design across apps and websites",
              "Exploring new AI tools and design trends",
              "Sharing learnings with design peers",
              "Learning about typography, colors, and layouts",
              "Staying inspired through music and creative art",
            ].map((activity, idx) => (
              <li className="about-activity" key={idx}>
                <ImPointRight /> {activity}
              </li>
            ))}
          </ul>
          <p style={{ color: "rgb(155 126 172)", marginTop: 15 }}>
            “Good design is not just how it looks — it’s how it works and how it feels.”
          </p>
          <footer className="blockquote-footer">Brijesh Sangani</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
