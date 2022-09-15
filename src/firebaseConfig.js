import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDPEo9ijUHYuDVMdp-fsHg57U6gJ0pTsjY",
  authDomain: "react-tomasdangelo.firebaseapp.com",
  projectId: "react-tomasdangelo",
  storageBucket: "react-tomasdangelo.appspot.com",
  messagingSenderId: "528360181607",
  appId: "1:528360181607:web:149566cd85f0deab2aa9c2"
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)