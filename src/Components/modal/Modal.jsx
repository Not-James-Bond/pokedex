import React from 'react';

import '../../styles/Modal.scss';

import styled, { css } from 'styled-components';
import closeIcon from '../../assets/images/closeIcon.svg';

function Modal({ pokemonDetails, onClose }) {
  const { name, abilities, game_indices, sprites, stats, types } =
    pokemonDetails;
  const official_artwork = 'official-artwork';
  return (
    <body className="BodyContainer">
      <div className="ModalContainer">
        <div className="CloseIconContainer">
          <img
            className="ImgClose"
            src={closeIcon}
            onClick={onClose}
            alt="Close"
          />
        </div>
        <div className="ModalCardContainer">
          <div className="ImgContainer">
            <img
              className="PokemonImg"
              src={sprites && sprites.other[official_artwork].front_default}
              alt="Pokemon Img"
            />
            <span>
              {types &&
                types.map((type, i) => {
                  return i === 1 ? (
                    <span className="PokemonTypeContainer2">
                      {type.type.name}
                    </span>
                  ) : (
                    <span className="PokemonTypeContainer1">
                      {type.type.name}
                    </span>
                  );
                })}
            </span>
          </div>
          <div className="DetailsContainer">
            <div className="NameContainer">
              <a>{name}</a>
              <span className="PokemonIndex">
                {game_indices && game_indices[0].game_index}
              </span>
            </div>
            <div className="AbilitiesContainer">
              <p className="AbilityHeading">Abilities</p>
              <p className="Ability">
                {abilities && abilities[0].ability.name}-
                {abilities && abilities[1].ability.name}
              </p>
            </div>
            <div className="MainStatsContainer">
              <div className="HpContainer">
                <div>HP</div>
                <div>{stats && stats[0].base_stat}</div>
                <div>ProgressBar</div>
              </div>
              <div className="SpeedContainer">
                <div>Speed</div>
                <div>{stats && stats[5].base_stat}</div>
                <div>ProgressBar</div>
              </div>
            </div>
            <div className="StatsContainer">
              <div className="StatBox">
                <div className="Circle">{stats && stats[2].base_stat}</div>
                <div className="StatText">Defense</div>
              </div>
              <div className="StatBox">
                <div className="Circle">{stats && stats[1].base_stat}</div>
                <div className="StatText">Attack</div>
              </div>
              <div className="StatBox">
                <div className="Circle">{stats && stats[4].base_stat}</div>
                <div className="StatText">SP Defense</div>
              </div>
              <div className="StatBox">
                <div className="Circle">{stats && stats[3].base_stat}</div>
                <div className="StatText">SP Attack</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Modal;
