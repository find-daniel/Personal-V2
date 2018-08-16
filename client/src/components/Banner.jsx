// @flow

import React from 'react';
import Fade from 'react-reveal/Fade';

const Banner = () => (
  <div className="jumbotron-fluid banner">
    <Fade bottom delay={400}>
      <div className="banner-textbox">
        <p className="banner-text">Hello, I'm Daniel</p>
        <p className="banner-subtext">Fullstack Software Engineer & UI / UX Enthusiast</p>
      </div>
      <div className="arrow">
        <a href="#about" aria-label="Navigate Down Button">
          <i className="far fa-arrow-alt-circle-down" />
        </a>
      </div>
    </Fade>
  </div>
);

export default Banner;
