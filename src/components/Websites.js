import React, { useState } from 'react';
import Slider from './Slider';

const Websites = () => {
  const [current, setCurrent] = useState(0);

  const images = [
    {
      img: './images/jddance-screenshot.png',
      alt: 'JD Dance',
      subtitle: `- Let's dance`,
      title: 'JD Dance Custom Website',
      blurb:
        'This site design aims to be elegant & fresh. It uses MongoDB to create a class booking system for users',
      tech: '> React, MongoDB, Node, Sass',
    },
    {
      img: './images/pcotton-screenshot.png',
      alt: 'JD Dance',
      subtitle: `- Get snappy`,
      title: 'P Cotton Photography',
      blurb:
        'An online gallery and selling portal for purchasing prints online. Implements the PayPal API for handling payment details.',
      tech: '> React, Sass',
    },
  ];

  return (
    <section className="website-section">
      <div className="header">WEBSITES</div>
      <div className="content">
        <Slider onChange={setCurrent} />
        <div className="inner">
          <div className="laptop">
            <img className="laptop--img" src="./images/laptop.png" alt="" />
            <div>
              <img
                className="laptop--inner-img"
                src={images[current].img}
                alt={images[current].alt}
              />
            </div>
          </div>
          <div className="info">
            <div className="info--inner">
              <div className="info--subtitle">{images[current].subtitle}</div>
              <div className="info--title">{images[current].title}</div>
              <div className="info--blurb">{images[current].blurb}</div>
              <div className="info--tech">{images[current].tech}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Websites;
