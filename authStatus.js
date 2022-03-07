import { 
  getAuth, 
  onAuthStateChanged
} from './firebase.js';

// 로그인 상태 확인
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log('로그인: ' + uid);
    document.querySelector('.user-name').textContent = user.displayName;
    document.querySelector('#login-btn').style.display = 'none';
    document.querySelector('.user-name').textContent = user.displayName;
  } else {
    // User is signed out
    console.log('로그아웃상태')
    document.querySelector('#logout').style.display = 'none';
    document.querySelector('#upload-btn').style.display = 'none';
  }
});

