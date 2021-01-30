import React from 'react';
import HeroSection from './components/HeroSection';
import Websites from './components/Websites';
import SubHero from './components/SubHero';
import './css/App.css';
import SkillsSection from './components/SkillsSection';
import SmallProjectSection from './components/SmallProjectsSection';
import About from './components/About';
import Contact from './components/Contact';
import * as Scroll from 'react-scroll';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css';

const App = () => {
  const Element = Scroll.Element;
  const scroller = Scroll.scroller;

  const scrollToElement = e => {
    e.preventDefault();

    const section = e.target.dataset.link;

    scroller.scrollTo(section, {
      duration: 800,
      delay: 50,
      smooth: true,
      offset: 0,
    });
  };

  const onFormSubmit = event => {
    event.preventDefault();
    window.alert('Your message has been sent. Thanks');
  };

  return (
    <main>
      <Element name="top">
        <HeroSection handleClick={scrollToElement} />
      </Element>
      <SubHero handleClick={scrollToElement} />

      <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce="true">
        <Element name="skills">
          <SkillsSection />
        </Element>
      </ScrollAnimation>

      <ScrollAnimation animateIn="animate__fadeInUp" animateOnce="true">
        <Element name="portfolio">
          <Websites />
        </Element>
      </ScrollAnimation>

      <ScrollAnimation animateIn="animate__fadeInUp" animateOnce="true">
        <Element name="projects">
          <SmallProjectSection />
        </Element>
      </ScrollAnimation>

      <ScrollAnimation animateIn="animate__fadeInUp" animateOnce="true">
        <Element name="about">
          <About />
        </Element>
      </ScrollAnimation>

      <ScrollAnimation animateIn="animate__fadeInRight" animateOnce="true">
        <Element name="contact">
          <Contact />
        </Element>
      </ScrollAnimation>
    </main>
  );
};

export default App;
