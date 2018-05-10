// @flow

import React from 'react';
import image from '../assets/profile.png';

const About = () => (
  <section className="about-content section">
    <div>
      <img className="about-img" src={image} alt="Me" />
    </div>
    <div className="about-info">
      <p>
        I'm a software engineer with a passion for clean code and user experiences. I enjoy living in the forefront of
        modern web technologies and am always looking for opportunities to expand my technical toolkit. Currently I
        create robust web apps utilizing modern front end frameworks such as React and Angular.
      </p>
      <p>When I'm not coding you can find me rock climbing or archiving my life through photography!</p>
    </div>
  </section>
);

export default About;
