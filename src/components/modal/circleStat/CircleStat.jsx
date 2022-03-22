import React from 'react';

import './circleStat-styles.scss';

const setStatType = statType => {
  if (statType === 'special-attack') statType = 'SP Attack';
  else if (statType === 'special-defense') statType = 'SP Defense';
  return statType;
};

function CircleStat(props) {
  const { stats } = props;

  const statType = setStatType(stats.stat.name);

  return (
    <div className="circle-stat">
      <div className="circular-stat">{stats.base_stat}</div>
      <div className="stat-text">{statType}</div>
    </div>
  );
}

export default CircleStat;
