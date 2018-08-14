// @flow

import React from 'react';
import Fade from 'react-reveal/Fade';

const Nav = () => (
  <Fade top delay={800}>
    <nav className="nav navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="#top">
        DANIEL SANCHEZ
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#nav-toggle"
        aria-expanded="false"
        aria-label="Toggle Navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse nav-content" id="nav-toggle">
        <ul className="navbar-nav ">
          <li className="nav-item">
            <a className="nav-link" href="#about">
              ABOUT
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#tech">
              TECH
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#portfolio">
              PORTFOLIO
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </Fade>
);

export default Nav;
