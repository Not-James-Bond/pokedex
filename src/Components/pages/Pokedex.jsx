import React, { useState, useEffect } from 'react';
import Footer from '../footer/Footer';
import Navbar from '../navBar/NavBar';
import Filter from '../filter/Filter';
import '../../styles/Pokedex.scss';
// import { getPokemon, getAllPokemon } from '../Services/Pokemon';
import {
  getPokemon,
  getAllPokemon,
} from '../services/Services';
import PokemonCard from '../pokemonCard/PokemonCard';

function Pokedex() {
  //  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')
  const [pokemonData, setPokemonData] = useState([]);

  const [loading, setLoading] = useState(true);
  const initialURL = 'https://pokeapi.co/api/v2/pokemon?limit=9';

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialURL);

      await loadPokemon(response.results);
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
      <div className="Main-container">
        <div className="Search-filter">
          <div className="Search-bar-container">
            <p className="Text-paragraph">
              {' '}
              800 <span>Pokemons</span> for you to choose your favorite
            </p>
            <input
              type="text"
              value=""
              placeholder="Encuentra tu pokemons..."
              className="Search-input"
            ></input>
          </div>
          <div className="Filter-menu">
            <Filter className="Filter-component" labelName="Tipo" />
            <Filter className="Filter-component" labelName="Ataqui" />
            <Filter className="Filter-component" labelName="Experiencia" />
          </div>
        </div>
        <div className="card-container">
          {loading ? (
            <h1 style={{ textAlign: 'center' }}>Loading...</h1>
          ) : (
            <>
              <div className="grid-container">
                {pokemonData.map((pokemon, i) => {
                  return <PokemonCard key={i} pokemon={pokemon} />;
                })}
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Pokedex;
