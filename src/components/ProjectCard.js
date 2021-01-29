import React from 'react';

const ProjectCard = props => {
  return (
    <div className={`project-card ${props.className}`}>
      <div className="card-subheader">{props.subHeader}</div>
      <div className="card-header">{props.header}</div>
      <div className="svg-container">
        <img src={props.svgImage} alt="" />
      </div>
      <div className="image-container">
        <img src={props.image} alt={props.alt} />
      </div>
    </div>
  );
};

export default ProjectCard;
