import amazonproject from "../assets/img/amazonproject.webp";
import ramaacreations from "../assets/img/ramaacreations.webp";
import mychatproject from "../assets/img/mychatproject.webp";
import stackoverflowproject from "../assets/img/stackoverflowclone.webp";
import "animate.css";
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Col, Container, Row } from "react-bootstrap";
import github from "../assets/img/Github.svg";
import linkSvg from "../assets/img/link.svg";
import alibabaLink from "../assets/img/alibabacloud-icon.svg";
import "./Projects.css";

function Projects() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Chhatresh Khatri | Portfolio | Projects</title>
        <meta name="description" content="Projects made by Chhatresh Khatri" />
      </Helmet>
      <section id="projects" className="project">
        <Container className="container">
          <h1>Projects</h1>
          <Row className="project-row project-1 align-items-center">
            <Col xs={12} md={12} lg={6} xl={6}>
              <div className="scroll-div">
                <img src={ramaacreations} alt="ramaa creations project" />
              </div>
            </Col>
            <Col>
              <div className="project-content">
                <h2>Ramma Creations</h2>
                <h3>An e-commerce Jewellery website</h3>
                <p>
                  Built using Alicms tool at Alibaba Cloud Low-Code Development
                  Contest 2022.
                </p>
                <p>
                  Achieved <strong>second </strong> position out of 2043
                  participants.
                </p>
                <a
                  target="_blank"
                  href="https://www.alibabacloud.com/blog/project-showcase-%7C-ramaa-creations_598812"
                >
                  Blog Link <img src={alibabaLink} alt="blog" />
                </a>
                <a
                  target="_blank"
                  href="http://w-58018-23029-15377.4724382204.sites.hkalimatch01.shopali.net/"
                >
                  Live Link
                  <img src={linkSvg} alt="link" />
                </a>
              </div>
            </Col>
          </Row>
          <Row className="project-row project-2 align-items-center">
            <Col>
              <div className="project-content">
                <h2>StackOverflow Clone</h2>
                <h3>A question-answer website with chatbot feature</h3>
                <p>
                  A popular online forum for programming-related questions and
                  answers built using MERN Stack, and it features user
                  authentication, a voting system for answers, and keyword-based
                  question search.
                </p>
                <a
                  target="_blank"
                  href="https://github.com/Chhatreshkhatri/stack-overflow-clone"
                >
                  Code Link
                  <img src={github} alt="github" />
                </a>
                <a
                  target="_blank"
                  href="https://soclone.chhatreshkhatri.com/"
                >
                  Live Link <img src={linkSvg} alt="link" />
                </a>
              </div>
            </Col>
            <Col xs={12} md={12} lg={6} xl={6}>
              <div className="scroll-div">
                <img src={stackoverflowproject} alt="stackoverflow project" />
              </div>
            </Col>
          </Row>
          <Row className="project-row project-3 align-items-center">
            <Col xs={12} md={12} lg={6} xl={6}>
              <div className="scroll-div">
                <img src={amazonproject} alt="amazon project" />
              </div>
            </Col>
            <Col>
              <div className="project-content">
                <h2>Amazon Clone</h2>
                <h3>An e-commerce website</h3>
                <p>
                  This project includes a range of features including user
                  authentication, a shopping cart, product details page,
                  payment processing and order history.
                </p>
                <a
                  target="_blank"
                  href="https://github.com/Chhatreshkhatri/amazon-clone"
                >
                  Code Link <img src={github} alt="github" />
                </a>
                <a
                  target="_blank"
                  href="https://amazonclone.chhatreshkhatri.com/"
                >
                  Live Link
                  <img src={linkSvg} alt="link" />
                </a>
              </div>
            </Col>
          </Row>
          <Row className="project-row project-4 align-items-center">
            <Col>
              <div className="project-content">
                <h2>MyChat</h2>
                <h3>An android chat application</h3>
                <p>
                  A simple Android chat app allows users to communicate with
                  each other through text messages on their Android devices. The
                  app typically features a user-friendly interface and
                  easy-to-use chat functions.
                </p>
                <a
                  target="_blank"
                  href="https://github.com/Chhatreshkhatri/MyChat"
                >
                  Code Link
                  <img src={github} alt="github" />
                </a>
              </div>
            </Col>
            <Col xs={12} md={12} lg={6} xl={6}>
              <div className="scroll-div">
                <img src={mychatproject} alt="Mychat project" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </HelmetProvider>
  );
}
export default Projects;