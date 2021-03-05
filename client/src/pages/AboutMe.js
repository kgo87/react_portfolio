import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import "./style.css";
import BioPic from "../images/intro_kat.jpg"

function AboutMe(){

  return(
    <div className="fade-in">
      <Container className="aboutMeContainer">
          <Row>
              <Col>
                  <header>
                      <h1>About Me</h1>
                  </header>
              </Col>
          </Row>
          <div id="horizontal-line" />
          <Row>
              <Col lg={4}>
                  <img src={BioPic} alt="KG" className="rounded img-thumbnail" />
              </Col>
              <Col lg={8}>
                  <p>
                  Passionate problem solver, software engineer and data scientist. 
                  9+ years of diverse engineering experience, including civil engineering, data science, and software development. 
                  Coding skills include all areas of full stack web development, test-driven application development, data science, 
                  and Machine Learning. Strong communicator with skills in understanding requirements and solving ambiguous problems. 
                  Experienced leader in technical and functional roles.
                  </p>
              </Col>
          </Row>
      </Container>
    </div>


  )
}

export default AboutMe;