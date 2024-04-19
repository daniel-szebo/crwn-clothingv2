import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBo9cAqYUHKSZviUuB8MJG2FkCUF8Zf36Y",
  authDomain: "crwn-clothing-db-c9bad.firebaseapp.com",
  projectId: "crwn-clothing-db-c9bad",
  storageBucket: "crwn-clothing-db-c9bad.appspot.com",
  messagingSenderId: "912529608442",
  appId: "1:912529608442:web:00cb2a38c88dde9e964343",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
