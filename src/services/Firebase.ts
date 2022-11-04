// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgqb8Egt_vwEY6cmQXULHxQrmOxF1WdKA",
  authDomain: "rede-de-servicos.firebaseapp.com",
  projectId: "rede-de-servicos",
  storageBucket: "rede-de-servicos.appspot.com",
  messagingSenderId: "587965305667",
  appId: "1:587965305667:web:dc56f8896fba4e884995f6",
  measurementId: "G-F7FZXDYC69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
let analytics;

if (app.name && typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { app, analytics }