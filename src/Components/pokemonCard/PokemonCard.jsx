import React from 'react';

import { capitalize } from '../../utils/utils';

import './pokemonCard-styles.scss';

function PokemonCard(props) {
  const { pokemon, handleOnClick } = props;
  const { height, image, name, type, weight } = pokemon;

  const pokemonType = (type, index) => (
    <div
      className={index === 0 ? 'property-grass' : 'property-defence'}
      key={`pokeType${index}`}>
      {capitalize(type)}
    </div>
  );
  return (
    <>
      <div className="card" onClick={() => handleOnClick(name)}>
        <div className="left-container">
          <p className="pokemon-name">{capitalize(name)}</p>
          <div className="circle-container">
            <div className="circle">
              <span className="circle-item">{weight}</span>
            </div>
            <div className="circle">
              <span className="circle-item">{height}</span>
            </div>
          </div>
          <div className="activity">
            <p className="activity-item">Attack</p>
            <p className="activity-item">Defence</p>
          </div>
          <div className="properties">{type.map(pokemonType)}</div>
        </div>
        <div className="right-container">
          <img className="pokemon-img" src={image} alt="Pokemon Image" />
        </div>
      </div>
    </>
  );
}

export default PokemonCard;
