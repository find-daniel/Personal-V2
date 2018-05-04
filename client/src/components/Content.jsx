// @flow
import React from 'react';
import Banner from './Banner';
import SectionHeader from './SectionHeader';

const Content = () => (
  <div className="content">
    <Banner />
    <SectionHeader section="about" />
    <h1>Content</h1>
  </div>
);

export default Content;
