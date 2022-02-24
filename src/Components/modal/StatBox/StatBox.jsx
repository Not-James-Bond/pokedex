import React from 'react';

import { capitalize } from '../../../utils/utils';

import './stat-box.scss';

function StatBox(props) {
  return (
    <div className="stat-box">
      <div className="circle">{props.stats && props.stats.base_stat}</div>
      <div className="stat-text">{capitalize(props.statType)}</div>
    </div>
  );
}

export default StatBox;
