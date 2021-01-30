import React, { useEffect, useState, useRef } from 'react';

const HeroSection = props => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const toTopButton = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      // console.log(scrollPosition);

      if (scrollPosition > 300) {
        toTopButton.current.style.display = 'block';
      } else if (scrollPosition < 300) {
        toTopButton.current.style.display = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  return (
    <section className="hero-section">
      <div
        ref={toTopButton}
        className="to-top"
        data-link="top"
        onClick={props.handleClick}
      ></div>
      <div className="hero-text">
        <div className="hero-title">
          <div className="mike-cotton-logo"></div>
          <div className="mike-cotton-subheader">WEB DEVELOPER</div>
        </div>
        <div className="hero-nav">
          <div data-link="portfolio" onClick={props.handleClick}>
            PORTFOLIO
          </div>
          <div data-link="skills" onClick={props.handleClick}>
            SKILLS
          </div>
          <div data-link="about" onClick={props.handleClick}>
            ABOUT ME
          </div>
          <div data-link="contact" onClick={props.handleClick}>
            CONTACT
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
