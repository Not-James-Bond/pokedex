import React from 'react';
import { ProgressBar } from 'react-bootstrap';

import './mainStat-styles.scss';
import '../modal-styles.scss';

function StatContainer(props) {
  const { stats, color } = props;
  const statType = stats && stats.stat.name;
  const variant = color === 'green' ? 'success' : 'warning';
  return (
    <div className={`${statType}-container`}>
      <div className="stat-heading">{statType}</div>
      <div className="stat">{stats && stats.base_stat}</div>
      <div className="progressBar">
        <ProgressBar variant={`${variant}`} now={stats.base_stat} />
      </div>
    </div>
  );
}

export default StatContainer;
