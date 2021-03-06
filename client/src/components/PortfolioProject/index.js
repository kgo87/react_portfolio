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


      <p>Check out <a href={project.repo}> GitHub Repository </a>  or  <a href={project.link}> Deployed App</a> </p>
    </Col>

  )
} 

export default PortfolioProject;