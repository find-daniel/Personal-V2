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
    <SectionHeader section="ABOUT" />
    <About />
    <SectionHeader section="SOME TECH I ENJOY USING" />
    <Tech />
    <SectionHeader section="PORTFOLIO" />
    <Portfolio />
    <SectionHeader section="CONTACT" />
    <Contact />
    <Footer />
  </div>
);

export default Content;
