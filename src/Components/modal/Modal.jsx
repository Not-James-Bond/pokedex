import React from 'react';

import MainStat from './mainStat/MainStat';
import StatBox from './StatBox/StatBox';
import PokemonType from './PokemonType';

import { capitalize } from '../../utils/utils';

import './Modal.scss';

import closeIcon from '../../assets/images/closeIcon.svg';

function Modal(props) {
  const { pokemonDetails, closeModal, modalState } = props;
  const { name, abilities, game_indices, sprites, stats, types } =
    pokemonDetails;
  const official_artwork = 'official-artwork';

  const onClose = () => {
    closeModal(!modalState);
    console.log('Modal onClick');
  };
  console.log(modalState);
  return (
    <div className="body-container">
      <div className="modal-container">
        <div className="close-icon-container">
          <img
            className="img-close"
            src={closeIcon}
            onClick={onClose}
            alt="Close"
          />
        </div>
        <div className="modal-card-container">
          <div className="img-container">
            <img
              className="poke-img"
              src={sprites && sprites.other[official_artwork].front_default}
              alt="Pokemon Img"
            />
            <span>
              {types &&
                types.map((type, i) => {
                  return i === 0 ? (
                    <PokemonType type={type && type.type} key={i} index={i} />
                  ) : (
                    <PokemonType type={type && type.type} key={i} index={i} />
                  );
                })}
            </span>
          </div>
          <div className="details-container">
            <div className="name-container">
              {capitalize(name)}
              <span className="pokemon-index">
                {game_indices && game_indices[0].game_index}
              </span>
            </div>
            <div className="abilities-container">
              <p className="ability-heading">Abilities</p>
              <p className="ability">
                {abilities && capitalize(abilities[0].ability.name)} -{' '}
                {abilities && capitalize(abilities[1].ability.name)}
              </p>
            </div>
            <div className="main-stats-container">
              <MainStat name={'HP'} stats={stats && stats['0']} />
              <MainStat name={'Speed'} stats={stats && stats['5']} />
            </div>
            <div className="stats-container">
              <StatBox statType={'Defense'} stats={stats && stats['2']} />
              <StatBox statType={'Attack'} stats={stats && stats['1']} />
              <StatBox statType={'SP Defense'} stats={stats && stats['4']} />
              <StatBox statType={'SP Attack'} stats={stats && stats['3']} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
