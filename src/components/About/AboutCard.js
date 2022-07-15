import React from "react";
import Card from "react-bootstrap/Card";
import { BsJoystick } from "react-icons/bs";
import { RiMovie2Line } from "react-icons/ri";
import { FaCarAlt } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Murat Celik </span>
            from <span className="purple"> Istanbul, Turkey.</span>
            <br />I am a mid-level software engineer from Istanbul Technical
            University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <BsJoystick color="#eee" /> Playing Games
            </li>
            <li className="about-activity">
              <RiMovie2Line /> Watching Movies
            </li>
            <li className="about-activity">
              <FaCarAlt /> Travelling
            </li>
          </ul>

          <p style={{ color: "#00ADB5" }}>
            "Yesterday is history, tomorrow is a mystery, today is a gift."{" "}
          </p>
          <footer className="blockquote-footer">Bill Keane</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
