// @flow
import React from 'react';
import Banner from './Banner';
import SectionHeader from './SectionHeader';
import About from './About';
import Tech from './Tech';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';
import Nav from './Nav';

const Content = () => (
  <div className="content">
    <Nav />
    <Banner />
    <SectionHeader section="ABOUT" id="about" />
    <About />
    <SectionHeader section="SOME TECH I ENJOY USING" id="tech" />
    <Tech />
    <SectionHeader section="PORTFOLIO" id="portfolio" />
    <Portfolio />
    <SectionHeader section="CONTACT" id="contact" />
    <Contact />
    <Footer />
  </div>
);

export default Content;
