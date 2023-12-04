import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5mhADNFDGzYRWEskh-xUFVKBOnNyNQF8",
  authDomain: "shoutouts-486ae.firebaseapp.com",
  projectId: "shoutouts-486ae",
  storageBucket: "shoutouts-486ae.appspot.com",
  messagingSenderId: "892635096453",
  appId: "1:892635096453:web:16c71ad62b9b3107c090ec",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}
export function signOut(): void {
  auth.signOut();
}

export const storage = getStorage(app);
