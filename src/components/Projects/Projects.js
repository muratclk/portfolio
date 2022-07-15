import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import Modal from "react-modal";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import hergele1 from "../../Assets/Projects/hergele1.png";
import hergele2 from "../../Assets/Projects/hergele2.png";
import evShare1 from "../../Assets/Projects/evShare1.png";
import evShare2 from "../../Assets/Projects/evShare2.png";
import iotApp1 from "../../Assets/Projects/iotApp1.png";
import iotApp2 from "../../Assets/Projects/iotApp2.png";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const projectData = [
  {
    title: "Hergele",
    images: [hergele1, hergele2],
    smallDescription: `All features you can find in a full-featured scooter sharing
    app, my engine can just do it all in one package ! `,
    description: ` All features you can find in a full-featured scooter sharing
    app, my engine can just do it all in one package ! -Onboarding
    -Google Maps integration -Real-time GPS tracking -QR code / ID
    scanner integration -ID verification -Smart lock -In-app
    payments -Ride stats -Booking -Social media integration -Push
    notifications`,
  },
  {
    title: "EV Sharing App",
    images: [evShare1, evShare2],
    smallDescription: `All features you can find in a full-featured EV sharing app, my engine can just do it all in one package !`,
    description: ` All features you can find in a full-featured EV sharing app, our engine can just do it all in one package !

    -Onboarding
    -Google Maps integration
    -Real-time GPS tracking
    -QR code / ID scanner integration
    -ID verification
    -Smart lock
    -In-app payments
    -Ride stats
    -Booking
    -Social media integration
    -Push notifications`,
  },
  {
    title: "Magneto IOT App",
    images: [iotApp1, iotApp2],
    smallDescription: `A full-stack management app for IoT devices`,
    description: ` A full-stack management app for IoT devices

    - Signup Login
    - Connected Admin Dashboard
    - Multi-Layer User Management
    - Map Integration
    - Two Way Control Commands to Devices
    - Device Status Check
    - Data Analysis & Reporting
    - Machine Learning
    - Predictor Maintenance
    
    `,
  },
];

function Projects() {
  const [openModal, setOpenModal] = useState(-1);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectData.map((item, index) => (
            <Col
              key={index.toString()}
              md={4}
              className="project-card"
              onClick={() => setOpenModal(index)}
            >
              <ProjectCard
                imgPath={item.images[0]}
                isBlog={false}
                title={item.title}
                description={item.smallDescription}
                // ghLink="https://github.com/soumyajit4419/Chatify"
                // demoLink="https://chatify-49.web.app/"
              />
            </Col>
          ))}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col> */}
        </Row>
        <Modal
          show={openModal !== -1}
          onHide={() => {
            setOpenModal(-1);
          }}
          size="xl"
        >
          {openModal !== -1 && (
            <>
              <Modal.Header closeVariant="white" closeButton>
                <Modal.Title>{projectData[openModal].title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Carousel renderThumbs={() => {}} emulateTouch infiniteLoop>
                  {projectData[openModal].images.map((img, index) => (
                    <div key={index.toString()}>
                      <img className="project-image" src={img} />
                    </div>
                  ))}
                </Carousel>
              </Modal.Body>
              <Modal.Footer>
                <div className="project-content">
                  All features you can find in a full-featured scooter sharing
                  app, my engine can just do it all in one package ! -Onboarding
                  -Google Maps integration -Real-time GPS tracking -QR code / ID
                  scanner integration -ID verification -Smart lock -In-app
                  payments -Ride stats -Booking -Social media integration -Push
                  notifications
                </div>
              </Modal.Footer>
            </>
          )}
        </Modal>
      </Container>
    </Container>
  );
}

export default Projects;
