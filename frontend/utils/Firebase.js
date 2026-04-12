// import {getAuth, GoogleAuthProvider} from "firebase/auth"
// import { initializeApp } from "firebase/app";
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
//   authDomain: "loginonecart.firebaseapp.com",
//   projectId: "loginonecart",
//   storageBucket: "loginonecart.firebasestorage.app",
//   messagingSenderId: "242165258894",
//   appId: "1:242165258894:web:0155a2ced93e20073247df"
// };
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app)
// const provider = new GoogleAuthProvider()


// export {auth , provider}



import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "e-commerce-86116.firebaseapp.com",
  projectId: "e-commerce-86116",
  storageBucket: "e-commerce-86116.firebasestorage.app",
  messagingSenderId: "19959362397",
  appId: "1:19959362397:web:e1105fee8a805221aceeb4",
  measurementId: "G-S589EKPZDM"
};

// ✅ FIX: prevent multiple initialization
const app = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApps()[0];

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };