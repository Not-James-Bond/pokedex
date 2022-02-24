import React from 'react';

import { ProgressBar } from 'react-bootstrap';

import { capitalize } from '../../../utils/utils';

import '../Modal.scss';
import './MainStatStyle.scss';

function StatContainer(props) {
  const { name, stats } = props;
  return (
    <div className={`${name}-container`}>
      <div className="statHeading">{capitalize(stats && stats.stat.name)}</div>
      <div className="stat">{stats && stats.base_stat}</div>
      <div className="progressBar">
        <ProgressBar now={stats && stats.base_stat} />
      </div>
    </div>
  );
}

export default StatContainer;
