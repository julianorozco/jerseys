import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBDGeCppU0GITGj946fE_yi1_YSZdKsWU",
  authDomain: "jerseys-dfb73.firebaseapp.com",
  projectId: "jerseys-dfb73",
  storageBucket: "jerseys-dfb73.appspot.com",
  messagingSenderId: "751520373313",
  appId: "1:751520373313:web:06d873fcea7db9fd34c4c0",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const collectionsName = {
  products: "products",
  orders: "orders",
};