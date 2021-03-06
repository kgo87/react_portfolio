import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import projects from "../projects.json";
import Project from "../components/Project";

class Projects extends Component {

  state = {
      projects
  };

  render() {

      return (

          <Container>
              <Row>
                  <Col lg={12}>
                      <div className="box">
                          <h1 style={{"text-align": "center"}}>My Projects</h1>
                          <br></br>
                          <Row style={{"align-content": "center"}}>
                              {this.state.projects.map(project => (
                                  <Project project={project} />
                              ))}
                          </Row>
                      </div>
                  </Col>
              </Row>
          </Container>
      )

  }

}

export default Projects;
