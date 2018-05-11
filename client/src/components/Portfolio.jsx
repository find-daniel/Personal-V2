// @flow

import React from 'react';

const Portfolio = () => (
  <section className="portfolio-content section">
    <div className="portfolio-item">
      <div className="item-header">
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
    <div className="portfolio-item">
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
    <div className="portfolio-item">
      <div className="item-header">
        <h4>FoodThoughts</h4>
        <p>Fullstack Engineer</p>
      </div>
      <div className="item-img">IMAGE</div>
      <div className="item-info">
        <p>Platform for searching and reviewing restaurants.</p>
      </div>
      <a href="https://github.com/find-daniel/Food-Thoughts" target="_blank" rel="noopener noreferrer">
        <button className="custom-btn">See the Code</button>
      </a>
    </div>
  </section>
);

export default Portfolio;
