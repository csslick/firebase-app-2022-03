import { 
  getDocs,
  collection, 
  query, 
  where,
  db,
  getAuth,
  signOut
} from './firebase.js';
import { Nav } from './nav.js';

document.querySelector('.nav-component').innerHTML = Nav();

// Get a reference to the database service
const colRef = collection(db, "products");
// const q = query(colRef, where("title", "==", "새"));

const querySnapshot = await getDocs(query(colRef));
querySnapshot.forEach((doc) => {
//   console.log(doc.id, " => ", doc.data());
  showList(doc.data())
});


function showList(docData) {
  const time = docData.date.toDate().toLocaleString();
  const html = `
    <div class="product">
      <img src="${docData.imgUrl}" alt="${docData.title}" />
      <div class="text">
        <h3 class="title">${docData.title}</h3>
        <p class="date">${time}</p>
        <p class="content">${docData.content.slice(0,50)}...</p>
      </div>
    </div>
  `
  const products = document.querySelector('.products');
  products.innerHTML += html;
}

// 로그아웃
logout.addEventListener('click', () => {
  const auth = getAuth();
  signOut(auth).then(() => {
    console.log('로그아웃 성공');
    location.href = './index.html';
    // localStorage user 정보 제거
    localStorage.removeItem('user');
  }).catch((err) => {
    console.log('로그아웃 에러');
  });
})