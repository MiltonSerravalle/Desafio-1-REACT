
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB4dIWQfD67CxtfBgPboYSkEcAeuQhZChQ",
  authDomain: "ecommerce-mavsoleo.firebaseapp.com",
  projectId: "ecommerce-mavsoleo",
  storageBucket: "ecommerce-mavsoleo.appspot.com",
  messagingSenderId: "1077983538692",
  appId: "1:1077983538692:web:7ce09ab1a9fd5a2fa48f51"
};


const app = initializeApp(firebaseConfig);

export const initFirestone = () => {
    return app
}