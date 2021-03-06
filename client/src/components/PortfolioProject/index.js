import React from "react";
import Col from "react-bootstrap/Col";


function PortfolioProject({project}){

  return (
    <Col md={6}>
      <h3 className="projectTitles">{project.name}</h3>
      <p className="projectTitles"> Summary: {project.summary}</p>
      <p>Technologies used: {project.technologies}</p>
      <img
        src={require("../../images" + project.image)}
        alt={project.name}
        className="projectScreenshots img-fluid rounded"></img>


      <a href={project.repo}>GitHub Repository</a>
    </Col>

  )
} 

export default PortfolioProject;