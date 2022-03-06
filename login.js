import { 
  db, 
  storage,
  getAuth, 
  createUserWithEmailAndPassword 
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
        user.displayName = name;  // user name
        console.log(user)
      })
      .catch((err) => {
        console.log(err)
      });
  })