import React, { useState } from 'react';

import ModalPage from '../../pages/modalPage/ModalPage';

import { capitalize } from '../../utils/utils';

import './PokemonCard.scss';

function PokemonCard({ pokemon }) {
  const [isModalOpen, setOpenModal] = useState(false);
  const setModalStatus = () => {
    setOpenModal(!isModalOpen);
  };
  return (
    <>
      <div className="card" onClick={setModalStatus}>
        {/* {isModalOpen && (
        <ModalPage
          pokemon={pokemon.name}
          closeModal={setOpenModal}
          modalState={isModalOpen}
        />
      )} */}
        <div className="left-container">
          <p className="pokemon-name">{capitalize(pokemon.name)}</p>
          <div className="circle-container">
            <div className="circle">
              <span className="circle-item">{pokemon.weight}</span>
            </div>
            <div className="circle">
              <span className="circle-item">{pokemon.height}</span>
            </div>
          </div>
          <div className="activity">
            {pokemon.abilities.map((ability, i) => {
              return i < 2 ? (
                <div className="activity-item">
                  {capitalize(ability.ability.name)}
                </div>
              ) : null;
            })}
          </div>
          <div className="properties">
            {pokemon.types.map((type, i) => {
              return i === 1 ? (
                <div className="property-defence" style={{ display: 'inline' }}>
                  {capitalize(type.type.name)}
                </div>
              ) : (
                <div className="property-grass" style={{ display: 'inline' }}>
                  {capitalize(type.type.name)}
                </div>
              );
            })}
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
      {isModalOpen && (
        <ModalPage
          pokemon={pokemon.name}
          closeModal={setOpenModal}
          modalState={isModalOpen}
        />
      )}
    </>
  );
}

export default PokemonCard;
