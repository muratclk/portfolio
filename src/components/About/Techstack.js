import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiVuedotjs,
  SiFirebase,
  SiNextdotjs,
  SiTypescript,
  SiAmazonaws,
  SiWordpress,
  SiJquery,
  SiSwift,
  SiKotlin,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <div>Javascript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <div>Typescript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <div>NodeJs</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <div>ReactJS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandReactNative />
        <div>React Native</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <div>MongoDb</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <div>NextJS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVuedotjs />
        <div>VueJS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <div>Firebase</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <div>Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
        <div>AWS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiWordpress />
        <div>Wordpress</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJquery />
        <div>Jquery</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSwift />
        <div>Swift</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKotlin />
        <div>Kotlin</div>
      </Col>
    </Row>
  );
}

export default Techstack;
