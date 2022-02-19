import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Modal from './Components/modal/Modal';
import ModalPage from './Components/pages/ModalPage';
import Pokedex from './Components/pages/Pokedex';
import ErrorPage from './Components/pages/ErrorPage';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Home from './Components/pages/Home';

function App() {
  const [isUserSignedIn, setUserSignedIn] = useState(false);
  const auth = getAuth();
  onAuthStateChanged(auth, user => {
    if (user) {
      return setUserSignedIn(true);
    } else return setUserSignedIn(false);
  });
  // if (isUserSignedIn === true) {
  //   return (
  //     <>
  //       <Routes>
  //         <Route path="/pokedex" element={<Pokedex />} exact />
  //         <Route path="*" element={<ErrorPage />} />
  //       </Routes>
  //     </>
  //   );
  // } else
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/legendaries" element={<ModalPage />} /> //To Test Modal
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
