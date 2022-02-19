import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from '../modal/Modal';
import ErrorPage from '../pages/ErrorPage';

function ModalPage({ pokemon, closeModal }) {
  const pokemon_name = pokemon; //pokemon.name
  const [fetchStatus, setFetchStaus] = useState(true);
  const [pokemonDetails, setPokemonDetails] = useState([]);
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`)
      .then(res => {
        setPokemonDetails(res.data);
      })
      .catch(err => {
        console.log(err);
        setFetchStaus(false);
      });
  }, []);
  return (
    // <>
    //   {fetchStatus ? (
    //     <Modal
    //       pokemonDetails={pokemonDetails}
    //       onClose={() => closeModal(false)}
    //     />
    //   ) : (
    //     <ErrorPage />
    //   )}
    // </>

    <Modal pokemonDetails={pokemonDetails} onClose={() => closeModal(false)} />
  );
}

export default ModalPage;
