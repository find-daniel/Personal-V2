// @flow
import Loadable from 'react-loadable';
import React from 'react';
import Banner from './Banner';
import SectionHeader from './SectionHeader';
// import About from './About';
// import Tech from './Tech';
// import Portfolio from './Portfolio';
// import Contact from './Contact';
// import Footer from './Footer';
import Nav from './Nav';

// Lazy loading
const Loading = () => <div> Loading... </div>;

const AboutLoad = Loadable({
  loader: () => import('./About'),
  loading: Loading
});

const PortfolioLoad = Loadable({
  loader: () => import('./Portfolio'),
  loading: Loading
});

const TechLoad = Loadable({
  loader: () => import('./Tech'),
  loading: Loading
});

const ContactLoad = Loadable({
  loader: () => import('./Contact'),
  loading: Loading
});

const FooterLoad = Loadable({
  loader: () => import('./Footer'),
  loading: Loading
});

const Content = () => (
  <div className="content">
    <Nav />
    <Banner />
    <SectionHeader section="ABOUT" id="about" />
    {/* <About /> */}
    <AboutLoad />
    <SectionHeader section="SOME TECH I ENJOY USING" id="tech" />
    {/* <Tech /> */}
    <TechLoad />
    <SectionHeader section="PORTFOLIO" id="portfolio" />
    {/* <Portfolio /> */}
    <PortfolioLoad />
    <SectionHeader section="CONTACT" id="contact" />
    {/* <Contact /> */}
    <ContactLoad />
    {/* <Footer /> */}
    <FooterLoad />
  </div>
);

export default Content;
