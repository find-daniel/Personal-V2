// @flow
import React from 'react';

type Props = {
  section: string
};

const SectionHeader = (props: Props) => (
  <div>
    <h1>{props.section}</h1>
  </div>
);

export default SectionHeader;
