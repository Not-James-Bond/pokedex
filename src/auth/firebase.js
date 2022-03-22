import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMIAN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

initializeApp(firebaseConfig);
var provider = new GoogleAuthProvider();

export const signInWithFirebase = () => {
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
      console.error(err);
      // // Handle Errors here.
      // const errorCode = err.code;
      // const errorMessage = err.message;
      // // The email of the user's account used.
      // const email = err.email;
      // // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(err);
    });
};

// export default provider;
