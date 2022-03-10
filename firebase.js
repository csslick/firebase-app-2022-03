import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import { 
  collection, 
  addDoc, 
  query, 
  where, 
  doc, getDocs, getDoc,
  getFirestore,
  deleteDoc
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-storage.js"

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
const storage = getStorage();

export {
  collection,
  addDoc,
  getDoc, getDocs, doc,
  query, 
  where,
  db,
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
  getAuth, createUserWithEmailAndPassword, updateProfile,
  signInWithEmailAndPassword, signOut,
  onAuthStateChanged,
  deleteDoc
}
