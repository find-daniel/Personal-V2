// @flow
import React from 'react';
import Fade from 'react-reveal/Fade';

type Props = {
  section: string
};

const SectionHeader = (props: Props) => (
  <div className="section-header">
    <Fade bottom>
      <div className="section-header-text">
        <h1>{props.section}</h1>
      </div>
      <Fade bottom>
        <div className="point" />
      </Fade>
    </Fade>
  </div>
);

export default SectionHeader;
