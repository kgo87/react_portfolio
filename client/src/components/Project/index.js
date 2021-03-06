import React from "react";
import Col from "react-bootstrap/Col";


function Project({project}){

  return (
    <Col md={6}>
      <h3>{project.name}</h3>
      <p> <span style={{fontWeight: 'bold'}}>Summary: </span> {project.summary}</p>
      <p> <span style={{fontWeight: 'bold'}}>Technologies used: </span> {project.technologies}</p>
      <img
        src={require("../../images" + project.image)}
        alt={project.name}
        className="projectScreenshots img-fluid rounded"></img>


      <p>Check out <a href={project.repo}> GitHub Repository </a>  or  <a href={project.link}> Deployed App</a> </p>
    </Col>

  )
} 

export default Project;