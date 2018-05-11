// @flow

import React from 'react';
import Fade from 'react-reveal/Fade';

const Portfolio = () => (
  <section className="portfolio-content section">
    <Fade left>
      <div className="portfolio-item">
        <div className="item-header">
          <div className="point" />
          <h4>Wayfare</h4>
          <p>Fullstack Engineer</p>
        </div>
        <div className="item-img">IMAGE</div>
        <div className="item-info">
          <p>Work-stay app for travelers looking to barter skills/services in return for lodging.</p>
        </div>
        <a href="https://github.com/find-daniel/wayfare-ui" target="_blank" rel="noopener noreferrer">
          <button className="custom-btn">See the Code</button>
        </a>
      </div>
    </Fade>
    <Fade right>
      <div className="portfolio-item">
        <div className="point" />
        <div className="item-header">
          <h4>Codesling.io</h4>
          <p>Fullstack Engineer</p>
        </div>
        <div className="item-img">IMAGE</div>
        <div className="item-info">
          <p>Typeracer for algo challenges - see who can solve the problem first!</p>
        </div>
        <a href="https://github.com/find-daniel/codesling.io-ui" target="_blank" rel="noopener noreferrer">
          <button className="custom-btn">See the Code</button>
        </a>
      </div>
    </Fade>
    <Fade left>
      <div className="portfolio-item">
        <div className="point" />
        <div className="item-header">
          <h4>FoodThoughts</h4>
          <p>Fullstack Engineer</p>
        </div>
        <div className="item-img">IMAGE</div>
        <div className="item-info">
          <p>Food app where you can review and rate restaurants you've visited.</p>
        </div>
        <a href="https://github.com/find-daniel/Food-Thoughts" target="_blank" rel="noopener noreferrer">
          <button className="custom-btn">See the Code</button>
        </a>
      </div>
    </Fade>
  </section>
);

export default Portfolio;
