import React from 'react';

const SkillsSection = () => {
  return (
    <section className="skills-section">
      <div className="main-skills-grid">
        <div className="header-container">
          <div className="sub-header">What can I do?</div>
          <div className="main-header">MY SKILLS</div>
        </div>
        <div className="inner-skills-grid skill">
          <div className="skill-cell one">
            <div className="cell-text">
              <div className="title">HTML, CSS, JS</div>
              <div className="blurb">
                Beginning my career in Web Development in 2020 means I started
                with the newest versions. Competent with ES6, HTML3 and CSS5.
              </div>
            </div>
          </div>
          <div className="skill-cell two">
            <div className="cell-text">
              <div className="title">React, Redux</div>
              <div className="blurb">
                Knowing that React is one of the fastest growing technologies in
                Web Dev I made my self familiar with it and the advantages it
                brings.
              </div>
            </div>
          </div>
          <div className="skill-cell three">
            <div className="cell-text">
              <div className="title">PHP mySQL</div>
              <div className="blurb">
                I’ve worked with PHP to build dynamic websites and combine the
                database functions to create projects including a CMS and blog
                website.
              </div>
            </div>
          </div>
        </div>
        <div className="footer-container">
          <div className="text">That's not all...</div>
          <div className="icons">
            <img src="../images/sass-icon.svg" alt="sass" />
            <img src="../images/github-icon.svg" alt="github" />
            <img src="../images/nodejs-icon.svg" alt="node js" />
            <img src="../images/mongodb-icon.svg" alt="mongodb" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
