import React, { useState, useEffect } from 'react';

import MainStat from './mainStat/MainStat';
import PokemonType from './pokemonType/PokemonType';
import CircleStat from './circleStat/CircleStat';

import { capitalize } from '../../utils/utils';
import { fetchModalData } from '../../utils/api';
import { OFFICIAL_ARTWORK } from '../../utils/constants';

import closeIcon from '../../assets/icons/close.svg';
import pokeballFallback from '../../assets/images/pokeball-fallback.svg';

import './modal-styles.scss';

function Modal(props) {
  const { pokemonName, closeModal, modalState } = props;

  const [fetchStatus, setFetchStatus] = useState(true);
  const [pokemonDetails, setPokemonDetails] = useState([]);

  const toggleModalState = () => {
    closeModal(!modalState);
  };

  const pokemonTypeRender = (type, index) => (
    <PokemonType type={type.type} isPrimaryType={index === 0} key={`pokemonType${index}`} />
  );

  const getAllAbilities = abilities => abilities.ability.name;

  const handleImageError = () => {
    this.onerror = null;
    this.src = { pokeballFallback };
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchModalData(pokemonName);
        setPokemonDetails(data);
      } catch (err) {
        setFetchStatus(false);
      }
    };

    getData();
    return () => {
      setPokemonDetails([]);
    };
  }, [pokemonName]);

  const { name, abilities, game_indices, sprites, stats, types } = pokemonDetails;

  return (
    <>
      {fetchStatus ? (
        <div className="modal-body-container">
          <div className="modal-container">
            <div className="close-icon-container">
              <img className="img-close" src={closeIcon} onClick={toggleModalState} alt="Close" />
            </div>
            <div className="modal-card-container">
              <div className="img-container">
                <img
                  className="poke-img"
                  src={sprites && sprites?.other[OFFICIAL_ARTWORK].front_default}
                  onError={handleImageError}
                  alt="Pokemon Img"
                />
                <span>{types?.map(pokemonTypeRender)}</span>
              </div>
              <div className="details-container">
                <div className="name-container">
                  {capitalize(name)}
                  {game_indices && (
                    <span className="pokemon-index">{game_indices[0].game_index}</span>
                  )}
                </div>
                <div className="abilities-container">
                  <p className="ability-heading">Abilities</p>
                  {abilities && (
                    <p className="ability">{abilities.map(getAllAbilities).join(' - ')}</p>
                  )}
                </div>
                {stats && (
                  <div className="main-stats-container">
                    <MainStat stats={stats['0']} color={'green'} />
                    <MainStat stats={stats['5']} color={'orange'} />
                  </div>
                )}
                {stats && (
                  <div className="stats-container">
                    <CircleStat stats={stats['2']} />
                    <CircleStat stats={stats['1']} />
                    <CircleStat stats={stats['4']} />
                    <CircleStat stats={stats['3']} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        (window.location.href = '/ErrorPage')
      )}
    </>
  );
}

export default Modal;
