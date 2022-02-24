import React, { useState, useEffect } from 'react';

import axios from 'axios';

import Modal from '../../Components/modal/Modal';
import ErrorPage from '../errorPage/ErrorPage';

function ModalPage(props) {
  const { pokemon, closeModal, modalState } = props;
  console.log(props);
  const pokemon_name = pokemon;
  const [fetchStatus, setFetchStaus] = useState(true);
  const [pokemonDetails, setPokemonDetails] = useState([]);
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`)
      .then(res => {
        setPokemonDetails(res.data);
      })
      .catch(err => {
        console.log("There Seems to be server error. We'll try to fix it soon");
        setFetchStaus(false);
      });
  }, []);
  return (
    <>
      {fetchStatus ? (
        <Modal
          pokemonDetails={pokemonDetails}
          closeModal={closeModal}
          modalState={modalState}
        />
      ) : (
        <ErrorPage />
      )}
    </>

    // <Modal
    //   pokemonDetails={pokemonDetails}
    //   closeModal={closeModal}
    //   modalState={modalState}
    // />
  );
}

export default ModalPage;
