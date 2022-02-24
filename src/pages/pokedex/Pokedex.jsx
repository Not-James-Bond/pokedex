import React, { useState, useEffect } from 'react';

import Footer from '../../Components/footer/Footer';
import Navbar from '../../Components/navBar/NavBar';
import Filter from '../../Components/filter/Filter';

import { getPokemon, getAllPokemon } from '../../utils/PokedexServices';
import PokemonCard from '../../Components/pokemonCard/PokemonCard';

import './Pokedex.scss';

function Pokedex() {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);
  const initialURL = 'https://pokeapi.co/api/v2/pokemon?limit=9';
  useEffect(() => {
    async function fetchData() {
      try {
        let response = await getAllPokemon(initialURL);
        await loadPokemon(response.results);
      } catch (error) {
        setError(error.message || 'Something went wrong');
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  const loadPokemon = async data => {
    let _pokemonData = await Promise.all(
      data.map(async pokemon => {
        let pokemonRecord = await getPokemon(pokemon);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };
  return (
    <>
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
          <div className="filter-menu">
            <Filter className="filter-component" labelName="Tipo" />
            <Filter className="filter-component" labelName="Ataqui" />
            <Filter className="filter-component" labelName="Experiencia" />
          </div>
        </div>
        <div className="card-container">
          {error ? (
            <h1>{error}</h1>
          ) : loading ? (
            <h1 style={{ textAlign: 'center' }}>Loading...</h1>
          ) : (
            <div className="grid-container">
              {pokemonData.map((pokemon, i) => {
                return <PokemonCard pokemon={pokemon} key={i} />;
              })}
            </div>
          )}
          {}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Pokedex;
