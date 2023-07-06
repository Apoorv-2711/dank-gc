import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjhOeUoNGKjyDs_biUok0viVN05jJ_Pgw",
  authDomain: "dank-gc-2711.firebaseapp.com",
  projectId: "dank-gc-2711",
  storageBucket: "dank-gc-2711.appspot.com",
  messagingSenderId: "573590205364",
  appId: "1:573590205364:web:48642f9acd14ad221878e1",
};

const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
