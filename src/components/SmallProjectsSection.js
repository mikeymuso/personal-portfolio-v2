import React from 'react';
import ProjectCard from './ProjectCard';

const SmallProjectSection = () => {
  return (
    <section className="small-project-section">
      <div className="main-grid">
        <div className="header">SMALL PROJECTS</div>
        <div className="inner-grid">
          {/* TODO: add links to all of these for github and live site */}
          <ProjectCard
            className="one"
            header="JS Drum Machine"
            subHeader="- Make some music"
            svgImage="./images/drum-icon.svg"
            image="./images/drum-machine.png"
            alt="drum machine"
            github="https://github.com/mikeymuso/drumMachine"
            live="https://mikeymuso.github.io/drumMachine/"
          />
          <ProjectCard
            className="two"
            header="Weather API"
            subHeader="- Check the weather"
            svgImage="./images/weather-icon.svg"
            image="./images/weather-api.png"
            alt="weather api"
            github="https://github.com/mikeymuso/Weather-API"
            live="https://mikeymuso.github.io/Weather-API/"
          />
          <ProjectCard
            className="three"
            header="Todo App"
            subHeader="- Keep track of things"
            svgImage="./images/note-icon.svg"
            image="./images/todo-app.png"
            alt="drum machine"
            github="https://github.com/mikeymuso/tobedone"
            live="https://mikeymuso.github.io/tobedone/"
          />
        </div>
      </div>
    </section>
  );
};

export default SmallProjectSection;
