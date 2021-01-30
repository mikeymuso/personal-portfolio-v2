import React from 'react';

const SubHero = props => {
  return (
    <section className="sub-hero">
      <div className="sub-hero-grid">
        <div
          className="left-cell"
          data-link="portfolio"
          onClick={props.handleClick}
        >
          <div>
            <div className="subtitle">- check out my</div>
            <div
              className="header"
              data-link="portfolio"
              onClick={props.handleClick}
            >
              FULL-STACK APPS
            </div>
          </div>
        </div>

        <div
          className="right-cell"
          data-link="projects"
          onClick={props.handleClick}
        >
          <div>
            <div className="subtitle">- see my skills</div>
            <div
              className="header"
              data-link="projects"
              onClick={props.handleClick}
            >
              SMALL PROJECTS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubHero;
