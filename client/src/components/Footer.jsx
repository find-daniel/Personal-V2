// @flow

import React from 'react';

const Footer = () => (
  <section className="footer-content footer">
    <div className="socials">
      <div>
        <a
          className="social-icon"
          href="https://www.linkedin.com/in/danielsanr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in fa-lg" />
        </a>
      </div>
      <div>
        <a className="social-icon" href="https://github.com/find-daniel" target="_blank" rel="noopener noreferrer">
          <span className="fab fa-github-alt fa-lg" />
        </a>
      </div>
      <div>
        <a
          className="social-icon"
          href="https://www.facebook.com/danielsanchez.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f fa-lg" />
        </a>
      </div>
      <div>
        <a
          className="social-icon"
          href="https://www.instagram.com/mr.danielsanchez/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram fa-lg" />
        </a>
      </div>
      <div>
        <a
          className="social-icon"
          href="https://open.spotify.com/user/126537593?si=i7M-hV82Tsq3g6Q6HVmuGQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-spotify fa-lg" />
        </a>
      </div>
    </div>
    <div>
      <p className="footer-info">Made by DANIEL SANCHEZ 2018</p>
    </div>
  </section>
);

export default Footer;
