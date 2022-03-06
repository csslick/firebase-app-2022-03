import { 
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
  const html = `
    <div class="product">
      <img src="${docData.imgUrl}" alt="${docData.title}" />
      <div class="text">
        <h3 class="title">${docData.title}</h3>
        <p class="price">${docData.price}원</p>
      </div>
    </div>
  `
  const products = document.querySelector('.products');
  products.innerHTML += html;
}