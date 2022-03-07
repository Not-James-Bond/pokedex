import React from 'react';

import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navBar/NavBar';
import { signInWithFirebase } from '../../auth/firebase';

import banner from '../../assets/images/banner-pikachu.svg';

import './home-styles.scss';

function Home() {
  return (
    <>
      <Navbar />
      <div className="home-body-container">
        <div className="text-container">
          <b>Find</b> all your favorite <b>Pokemon</b>
          <p className="description">
            You can know the type of Pokemon, its strengths, disadvantages and
            abilities
            <button className="login-button" onClick={signInWithFirebase}>
              Google
            </button>
          </p>
        </div>
        <figure className="image-container">
          <img className="banner-img" src={banner} alt="" />
        </figure>
      </div>
      <Footer />
    </>
  );
}

export default Home;
