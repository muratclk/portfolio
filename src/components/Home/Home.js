import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section className="home">
      <Particle />
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row style={{ zIndex: 9999 }}>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> MURAT CELIK</strong>
              </h1>

              <div style={{ textAlign: "center" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px", zIndex: "1000" }}
              />
            </Col>
          </Row>
          <Home2 />
        </Container>
      </Container>
    </section>
  );
}

export default Home;
