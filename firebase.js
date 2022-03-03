import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";
import { 
  collection, 
  addDoc, 
  query, 
  where, 
  getDocs,
  getFirestore
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD7oWlQUlPdkthEnCmkms56JIJbW4XgDnY",
    authDomain: "fire-market-94d8d.firebaseapp.com",
    projectId: "fire-market-94d8d",
    storageBucket: "fire-market-94d8d.appspot.com",
    messagingSenderId: "379295670828",
    appId: "1:379295670828:web:708d01f8e31b6826e72789"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore();

  export {
    app,
    getDatabase,
    collection,
    addDoc,
    getDocs,
    query, 
    where,
    db
  }
