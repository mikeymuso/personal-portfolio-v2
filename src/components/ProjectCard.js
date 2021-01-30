import React, { useState, useEffect, useRef } from 'react';

const ProjectCard = props => {
  const [active, setActive] = useState(false);
  const card = useRef();

  useEffect(() => {
    const handleMouseOver = () => {
      console.log('hovering');
      setActive(true);
    };

    const currCard = card.current;

    currCard.addEventListener('mouseover', handleMouseOver);

    return () => {
      currCard.addEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div ref={card} className={`project-card ${props.className}`}>
      <div className="card-subheader">{props.subHeader}</div>
      <div className="card-header">{props.header}</div>
      <div className="svg-container">
        <img src={props.svgImage} alt="" />
      </div>
      <div className="image-container">
        <img src={props.image} alt={props.alt} />
      </div>
      <div className="links">
        <a href={props.github} target="_blank" rel="noreferrer">
          <div className="github-icon"></div>
        </a>
        <a href={props.live} target="_blank" rel="noreferrer">
          <div className="live-preview-icon"></div>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
