import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'API_KEY',
  authDomain: 'AUTH_DOMIAN',
  projectId: 'PROJECT_ID',
  storageBucket: 'STORAGE_BUCKET',
  messagingSenderId: 'SENDER_ID',
  appId: 'APP_ID',
};

initializeApp(firebaseConfig);
var provider = new GoogleAuthProvider();
export default provider;
