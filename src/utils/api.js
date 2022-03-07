import axios from 'axios';

import { URL } from './constants';

export const fetchModalData = pokemonName => {
  let pokemonData = axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(
        "There Seems to be server error. We'll try to fix it soon",
        err
      );
      throw err;
    });
  return pokemonData;
};

export const fetchAllPokemon = async () => {
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error(
      `There was an Error: ${response.status} ${response.statusText}`
    );
  }
  return response.json();
};
