// @flow
import React from 'react';
import Fade from 'react-reveal/Fade';
import ScrollableAnchor from 'react-scrollable-anchor';

type Props = {
  section: string,
  id: string
};

const SectionHeader = (props: Props) => (
  <ScrollableAnchor id={props.id}>
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
  </ScrollableAnchor>
);

export default SectionHeader;
