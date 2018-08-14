// @flow

import React from 'react';
import Fade from 'react-reveal/Fade';
// import image from '../assets/profile.png';
import resume from '../assets/Daniel-Sanchez-Resume.pdf';

const About = () => (
  <section className="about-content section">
    <Fade top cascade>
      <div className="col-lg-4">
        <img
          className="about-img"
          src="https://res.cloudinary.com/danielsr/image/upload/q_60/v1534287294/profile.jpg"
          alt="Me"
        />
      </div>
      <div className="about-info col-lg-6">
        <p>
          I'm a software engineer with a passion for clean code and user experiences. I enjoy living in the forefront of
          modern web technologies and am always looking for opportunities to expand my technical toolkit. Currently I
          create robust web apps utilizing front end frameworks such as React and Angular.
        </p>
        <p>When I'm not coding you can find me rock climbing or archiving my life through photography!</p>
        <div className="resume">
          <a href={resume} download>
            <button className="custom-btn resume-btn">
              <i className="far fa-file-pdf" />
              Resume
            </button>
          </a>
        </div>
      </div>
    </Fade>
  </section>
);

export default About;
