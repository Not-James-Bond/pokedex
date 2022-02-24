import React, { useState } from 'react';

import { Route, Routes } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import Home from './pages/homePage/Home';
import Pokedex from './pages/pokedex/Pokedex';
import ErrorPage from './pages/errorPage/ErrorPage';
import ModalPage from './pages/modalPage/ModalPage';

import './Components/modal/mainStat/MainStatStyle.scss';
import './styles/ProgressBarStyle.scss';

function App() {
  const [isUserSignedIn, setUserSignedIn] = useState(false);
  const auth = getAuth();
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log('Already Logged In');
      return setUserSignedIn(true);
    } else return setUserSignedIn(false);
  });
  // We can do Skip any pages like Home if user is logged in
  if (isUserSignedIn === true) {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokedex" element={<Pokedex />} exact />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </>
    );
  } else
    return (
      <>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/Pokedex" element={<Pokedex />} />
          <Route path="/Legendaries" element={<ModalPage />} /> //To Test Modal
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </>
    );
}

export default App;
