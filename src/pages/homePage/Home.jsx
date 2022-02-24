import React from 'react';

import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import Footer from '../../Components/footer/Footer';
import Navbar from '../../Components/navBar/NavBar';
import provider from '../../auth/firebase';

import './home-style.scss';

import banner from '../../assets/images/Banner.svg';

const signInWithFirebase = () => {
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then(res => {
      console.log(res);
      const credential = GoogleAuthProvider.credentialFromResult(res);
      const token = credential.accessToken;
      // // The signed-in user info.
      // const user = res.user;
    })
    .catch(err => {
      console.log(err);
      // // Handle Errors here.
      // const errorCode = err.code;
      // const errorMessage = err.message;
      // // The email of the user's account used.
      // const email = err.email;
      // // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(err);
    });
};

function Home() {
  return (
    <>
      <Navbar />
      <div className="homeBody-container">
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
