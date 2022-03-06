import { 
  db, 
  storage,
  getAuth, 
  createUserWithEmailAndPassword,
  updateProfile
} from './firebase.js';

  // 회원가입
  register.addEventListener('click', (e) => {
    e.preventDefault();
    const register = document.getElementById('register').value;
    const name = document.getElementById('newName').value;
    const email = document.getElementById('newEmail').value;
    const pwd = document.getElementById('newPwd').value;
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, pwd)
      .then((userCredential) => {
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