import React, { useState } from 'react';
import Slider from './Slider';

const Websites = () => {
  const [current, setCurrent] = useState(0);

  const images = [
    // When adding new apps - watch the length of 'title' does not overflow container - 16 characters-ish!
    // {
    //   img: './images/jddance-screenshot.png',
    //   alt: 'JD Dance',
    //   subtitle: `- Let's dance`,
    //   title: 'JD Dance Website',
    //   blurb:
    //     'This full-stack app uses MongoDB to create a class booking system for users. Users can sign in and sign up for classes and the teachers can access this info.',
    //   tech: '> React, MongoDB, Node, Sass',
    //   github: '#',
    //   live: '#',
    // },
    {
      img: './images/pcotton-screenshot.png',
      alt: 'JD Dance',
      subtitle: `- Get snappy`,
      title: 'Photography Site',
      blurb:
        'An online gallery and selling portal for purchasing prints online. This app implements the PayPal API for handling payment details and creating orders',
      tech: '> React, Sass',
      github: 'https://github.com/mikeymuso/pcotton-photography-react',
      live: 'https://paul-cotton-photography.netlify.app/',
    },
    {
      img: './images/blogging-site.png',
      alt: 'MERN Blog Website',
      subtitle: `- Spit it out`,
      title: 'MERN Blogging Site',
      blurb:
        'A blogging website created with React, Express, MongoDB & NodeJS with a CMS',
      tech: '> MERN, React, MongoDB, NodeJS, Express',
      github: 'https://github.com/mikeymuso/blogging-site',
      live: 'https://mike-cotton-blog-site.herokuapp.com/',
    },
  ];

  return (
    <section className="website-section">
      <div className="header">FULL-STACK APPS</div>
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
              <div className="info--links">
                <a
                  href={images[current].github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="github-icon"></div>
                </a>
                <a href={images[current].live} target="_blank" rel="noreferrer">
                  <div className="live-preview-icon"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Websites;
