import React from 'react';
import ProjectCard from './ProjectCard';

const SmallProjectSection = () => {
  return (
    <section className="small-project-section">
      <div className="main-grid">
        <div className="header">SMALL PROJECTS</div>
        <div className="inner-grid">
          <ProjectCard
            className="one"
            header="JS Drum Machine"
            subHeader="- Make some music"
            svgImage="./images/drum-icon.svg"
            image="./images/drum-machine.png"
            alt="drum machine"
          />
          <ProjectCard
            className="two"
            header="Weather API"
            subHeader="- Check the weather"
            svgImage="./images/weather-icon.svg"
            image="./images/weather-api.png"
            alt="weather api"
          />
          <ProjectCard
            className="three"
            header="Todo App"
            subHeader="- Keep track of things"
            svgImage="./images/note-icon.svg"
            image="./images/todo-app.png"
            alt="drum machine"
          />
        </div>
      </div>
    </section>
  );
};

export default SmallProjectSection;
