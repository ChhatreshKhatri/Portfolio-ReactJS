import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import headerImg from "../assets/img/banner_pic.webp";
import { BoxArrowUpRight, Globe } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Typewriter from "typewriter-effect";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./Home.css";

function Home() {
  return (
    <HelmetProvider>
      <section className="banner" id="home">
        <Helmet>
          <title>Chhatresh Khatri | Portfolio</title>
        </Helmet>
        <Container>
          <Row className="align-items-center">
            <Col xs={12} sm={12} md={12} lg={8} xl={8}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{`Hi! I'm Chhatresh Khatri`} </h1>
                    <div className="typeWriter">
                      <Typewriter
                        options={{
                          strings: [
                            "Web Developer",
                            "Web Designer",
                            "Software Engineer",
                          ],
                          autoStart: true,
                          loop: true,
                          deleteSpeed: "natural",
                        }}
                      />
                    </div>
                    <p>
                      B.Tech in Computer Science & Engineering and I am skilled
                      in problem solving and web-development, as well as being
                      an enthusiastic and self-motivated professional with great
                      interpersonal and communication skills.
                    </p>
                  </div>
                )}
              </TrackVisibility>
            </Col>
            <Col md={true}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible
                        ? "animate__animated animate__zoomIn img-header"
                        : "img-header"
                    }
                  >
                    <img
                      src={headerImg}
                      alt="Header Img"
                      className="header-img"
                    />
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
          <div className="connect_withMe">
            <span>
            <Button
              variant="primary"
              href="https://drive.google.com/file/d/19RguGg9v2VWPQJa-XL_2sCASpk65u5hd/view"
              target="_blank"
              className="resume-button"
            >
              <BoxArrowUpRight />
              &ensp;View Resume
            </Button></span>
            <span>
            <Button
              variant="primary"
              href="https://social.chhatreshkhatri.com/"
              target="_blank"
              className="resume-button"
            >
              <Globe />
              &ensp;Social Links
            </Button></span>
          </div>
        </Container>
      </section>
    </HelmetProvider>
  );
}

export default Home;