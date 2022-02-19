import React, { useState } from 'react';
import '../../styles/PokemonCard.scss';
import ModalPage from '../pages/ModalPage';

function PokemonCard({ pokemon }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div
      className="card"
      onClick={() => {
        setOpenModal(true);
      }}>
      {openModal && (
        <ModalPage pokemon={pokemon.name} closeModal={setOpenModal} />
      )}
      <div className="left-container">
        <p className="pokemon-name">
          {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
        </p>
        <div className="circle">
          <span className="circle-item">{pokemon.weight}</span>
          <span className="circle-item">{pokemon.height}</span>
        </div>
        <div className="activity">
          {/* <span className='activity-item'>{pokemon.abilities[0].ability.name}</span> */}
          {pokemon.abilities.map((ability, i) => {
            return i < 2 ? (
              <div className="activity-item" style={{ display: 'inline' }}>
                {ability.ability.name}
              </div>
            ) : null;
          })}
          {/* <span className='activity-item'>{pokemon.abilities[1].ability.name}</span> */}
        </div>
        <div className="properties">
          {pokemon.types.map((type, i) => {
            return i === 1 ? (
              <div className="property-defence" style={{ display: 'inline' }}>
                {type.type.name}
              </div>
            ) : (
              <div className="property-grass" style={{ display: 'inline' }}>
                {type.type.name}
              </div>
            );
          })}
          {/* <span className='property-grass'>{pokemon.types[0].type.name}</span> */}
          {
            // pokemon.types[1].type.name ? <span className='property-defence'>{pokemon.types[1].type.name}</span> : null
          }
        </div>
      </div>
      <div className="right-container">
        <img
          className="pokemon-img"
          src={pokemon.sprites.other.home.front_default}
          alt="Pokemon Image"
        />
      </div>
    </div>
  );
}

export default PokemonCard;
