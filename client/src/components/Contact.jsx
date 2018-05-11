// @flow

import React from 'react';
import Fade from 'react-reveal/Fade';

const Contact = () => (
  <Fade top cascade>
    <section className="contact-content section">
      <div className="contact-info">
        <p>
          I'm currently open to new opportunities! Feel free to shoot me an email if you wanna chat or let me know how I
          can help you.
        </p>
      </div>
      <div className="contact-options">
        <div className="contact-option col-12">
          <div className="option-icon col-2 col-md-5">
            <i className="far fa-envelope fa-lg" />
          </div>
          <div className="option-info col-10 col-md-7">
            <a href="mailto:atlow.archive@gmail.com?Subject=Hello%20Daniel">atlow.archive@gmail.com</a>
          </div>
        </div>
        <div className="contact-option col-12">
          <div className="option-icon col-2 col-md-5">
            <i className="far fa-comment fa-lg" />
          </div>
          <div className="option-info col-10 col-md-7">
            <a href="tel:+1-951-281-9420">951.281.9420</a>
          </div>
        </div>
      </div>
    </section>
  </Fade>
);

export default Contact;
