// @flow

import React from 'react';
import Fade from 'react-reveal/Fade';

const Banner = () => (
  <div className="jumbotron-fluid banner">
    <Fade bottom duration={800}>
      <div className="banner-textbox">
        <p className="banner-text">Hello, I'm Daniel</p>
        <p className="banner-subtext">Fullstack Software Engineer & UI / UX Enthusiast</p>
      </div>
    </Fade>
  </div>
);

export default Banner;
