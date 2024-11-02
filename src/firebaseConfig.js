// firebaseConfig.js
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Si usas Firestore


const firebaseConfig = {
  apiKey: "AIzaSyAoEz33Wjlv0_T67LphAt3tUqCeOLRaoq0",
  authDomain: "futech-6e866.firebaseapp.com",
  projectId: "futech-6e866",
  storageBucket: "futech-6e866.appspot.com",
  messagingSenderId: "854301973658",
  appId: "1:854301973658:web:d36f03a0c4820d66035323",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Base de datos Firestore
const storage = getStorage(app);

export { db, storage };
