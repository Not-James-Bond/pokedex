import React from 'react';

import { capitalize } from '../../utils/utils';

import './Modal.scss';

function PokemonType(props) {
  const { type, index } = props;
  return (
    <span className={`pokemon-type-container${index + 1}`}>
      {capitalize(type.name)}
    </span>
  );
}

export default PokemonType;
