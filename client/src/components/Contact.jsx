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
        <div>
          Email: <a href="mailto:atlow.archive@gmail.com?Subject=Hello%20Daniel">atlow.archive@gmail.com</a>
        </div>
        <div>
          Phone: <a href="tel:+1-951-281-9420">951-281-9420</a>
        </div>
      </div>
    </section>
  </Fade>
);

export default Contact;
