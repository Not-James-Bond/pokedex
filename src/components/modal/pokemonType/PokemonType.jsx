import React from 'react';

import { capitalize } from '../../../utils/utils';

import './pokemonType-styles.scss';

function PokemonType(props) {
  const { type, isPrimaryType } = props;
  const typeClassName = isPrimaryType ? 'primary' : 'secondary';
  return (
    <span className={`pokemon-type-container-${typeClassName}`}>
      {capitalize(type.name)}
    </span>
  );
}

export default PokemonType;
