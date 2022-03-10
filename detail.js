import { 
  doc, getDoc, getDocs,
  collection, 
  query, 
  where,
  db,
  getAuth,
  signOut,
} from './firebase.js';
import { Nav } from './nav.js';

// 문서 id를 query로 받기
const docId = new URLSearchParams(location.search).get('id');
console.log('query = ', docId);
document.querySelector('.nav-component').innerHTML = Nav();

// Get a reference to the database service
const docRef = doc(db, "products", docId);
const docSnap = await getDoc(docRef);
if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
  showList(docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}

function showList(docData) {
  const time = docData.date.toDate().toLocaleString();
  const html = `
    <div class="product">
      <img src="${docData.imgUrl}" alt="${docData.title}" />
      <div class="text">
        <h3 class="title">${docData.title}</h3>
        <p class="date">${time}</p>
        <p class="content">${docData.content}</p>
        <div class="btn-group">
          <a class="btn btn-primary" id="editBtn">수정</a>
          <a class="btn btn-danger" id="delBtn">삭제</a>
        </div>
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