import { 
  app, 
  getDatabase, 
  getDocs,
  collection, 
  query, 
  where,
  db,
} from './firebase.js';

// Get a reference to the database service

const colRef = collection(db, "products");
// const q = query(colRef, where("title", "==", "새"));

const querySnapshot = await getDocs(query(colRef));
querySnapshot.forEach((doc) => {
//   console.log(doc.id, " => ", doc.data());
  showList(doc.data())
});


function showList(docData) {
  const title = docData.title;
  const p = document.createElement('p');
  p.innerHTML = title;
  document.body.appendChild(p)
}