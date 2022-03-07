import React, { useState, useEffect } from 'react';

import Filter from '../../components/filter/Filter';
import Footer from '../../components/footer/Footer';
import Modal from '../../components/modal/Modal';
import Navbar from '../../components/navBar/NavBar';
import PokemonCard from '../../components/pokemonCard/PokemonCard';

import { fetchAllPokemon } from '../../utils/api';
import { FILTER_TEXT } from '../../utils/constants';

import './pokedex-styles.scss';

function Pokedex() {
  const [pokemonData, setPokemonData] = useState([]);
  const [pokeName, setPokeName] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, toggleIsModalOpen] = useState(false);

  const toggleModalStatus = name => {
    setPokeName(name);
    toggleIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllPokemon();
        setPokemonData(data);
      } catch (e) {
        setError(e.message || 'Something went wrong');
        console.error('error: ', error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);
  const listPokemonCard = (pokemon, index) => (
    <PokemonCard
      pokemon={pokemon}
      handleOnClick={toggleModalStatus}
      key={`pokemonCard${index}`}
    />
  );
  const listFilter = (text, index) => (
    <Filter labelName={text} key={`filter${index}`} />
  );
  return (
    <>
      {isModalOpen && (
        <Modal
          pokemonName={pokeName}
          closeModal={toggleIsModalOpen}
          modalState={isModalOpen}
        />
      )}
      <Navbar />
      <div className="main-container">
        <div className="search-filter">
          <div className="search-bar-container">
            <p className="text-paragraph">
              {' '}
              800 <span>Pokemons</span> for you to choose your favorite
            </p>
            <input
              type="text"
              defaultValue=""
              placeholder="Encuentra tu pokemons..."
              className="search-input"></input>
          </div>
          <div className="filter-menu">{FILTER_TEXT.map(listFilter)}</div>
          <button className="filter-button">Filter</button>
        </div>
        <div className="card-container">
          {error ? (
            (window.location.href = '/ErrorPage')
          ) : isLoading ? (
            <h1 style={{ textAlign: 'center' }}>Loading...</h1>
          ) : (
            pokemonData.length && (
              <div className="grid-container">
                {pokemonData.map(listPokemonCard)}
              </div>
            )
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Pokedex;
