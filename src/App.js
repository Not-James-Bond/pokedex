import React, { useState } from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import Home from './pages/homePage/Home';
import Pokedex from './pages/pokedex/Pokedex';
import ErrorPage from './pages/errorPage/ErrorPage';

import './styles/progressBar-styles.scss';

function App() {
  const [isUserSignedIn, setUserSignedIn] = useState(false);
  const auth = getAuth();
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log('Already Logged In');
      return setUserSignedIn(true);
    } else return setUserSignedIn(false);
  });

  //Disabling below isUserSignedIn check since we need to call auth.logout() to go view Home page which isn't implemented
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            // isUserSignedIn ? <Pokedex /> :
            <Home />
          }
        />
        <Route path="/pokedex" element={<Pokedex />} exact />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
