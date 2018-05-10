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
    <SectionHeader section="About" />
    <About />
    <SectionHeader section="Tech" />
    <Tech />
    <SectionHeader section="Portfolio" />
    <Portfolio />
    <SectionHeader section="Contact" />
    <Contact />
    <Footer />
  </div>
);

export default Content;
