import { 
  db, 
  storage,
  getAuth, 
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from './firebase.js';
import { Nav } from './nav.js';

document.querySelector('.nav-component').innerHTML = Nav();

const register = document.getElementById('register');
const login = document.getElementById('login');
const logout = document.getElementById('logout');

// 로그인 상태 확인
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log('로그인: ' + uid);
  } else {
    // User is signed out
    console.log('로그아웃상태')
  }
  console.log('isUser = ' + isUser)
});  

// 로그인
login.addEventListener('click', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const pwd = document.getElementById('pwd').value;
  const auth = getAuth();

  signInWithEmailAndPassword(auth, email, pwd)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
    })
    .catch((err) => {
      console.log('login error: ', err);
      alert('아이디 또는 비밀번호 오류');
    });
})  

// 로그아웃
logout.addEventListener('click', () => {
  const auth = getAuth();
  signOut(auth).then(() => {
    console.log('로그아웃 성공');
  }).catch((err) => {
    console.log('로그아웃 에러');
  });
})

// 회원가입
register.addEventListener('click', (e) => {
  e.preventDefault();
  const name = document.getElementById('newName').value;
  const email = document.getElementById('newEmail').value;
  const pwd = document.getElementById('newPwd').value;
  const auth = getAuth();

  createUserWithEmailAndPassword(auth, email, pwd)
    .then((userCredential) => {
      // sign-up Form reset
      // 가입 후 유저정보 반환됨 - uid 확인
      const user = userCredential.user;
      console.log(user)
      updateProfile(auth.currentUser, {
        displayName: name, 
        photoURL: "https://blog.kakaocdn.net/dn/wn8ds/btq5u4RsTuG/7KMKUbqv3CLSbdigBxxnJ0/img.png"
      }).then(() => {
        console.log('Profile updated!');
      }).catch((err) => {
        console.log('profile update error');
      });
    })
    .catch((err) => {
      console.log('무슨에러? ', err)
    });
})