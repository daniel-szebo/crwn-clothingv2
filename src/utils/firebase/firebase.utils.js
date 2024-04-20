import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { EmailAuthCredential } from "firebase/auth/cordova";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

// if user data does not exist
// create / set the document with the date from userAuth in my collection

// if user data exists
// return userDocRef
