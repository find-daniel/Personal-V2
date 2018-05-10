// @flow
import React from 'react';

type Props = {
  section: string
};

const SectionHeader = (props: Props) => (
  <div className="section-header">
    <div className="section-header-text">
      <h1>{props.section}</h1>
    </div>
  </div>
);

export default SectionHeader;
