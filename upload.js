import {
  collection,
  db,
  addDoc,
  storage,
  ref,
  uploadBytes,
  getDownloadURL
} from "./firebase.js";

const sendBtn = document.getElementById("send");

sendBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  let title = document.querySelector("#title");
  let price = document.querySelector("#price");
  let content = document.querySelector("#content");
  let image = document.querySelector("#image");

  const uploadFile = async () => {
    const file = image.files[0];
    let imgUrl = "";

    try {
      // 파일이 존재하면 이미지 저장
      if(file) {
        const storageRef = ref(storage, `images/${file.name}`);
        const snapshot = await uploadBytes(storageRef, file)
        console.log("Uploaded a blob or file!");
        imgUrl = await getDownloadURL(storageRef);
        console.log('url = ', imgUrl);
        console.log(file.name);
      } else {
        imgUrl = "images/no-image.jpg"; // 빈이미지
      }
    
      // 도큐먼트 쓰기
      const docRef = await addDoc(collection(db, "products"), {
        title: title.value,
        price: price.value,
        content: content.value,
        date: new Date(),
        imgUrl: imgUrl,
      });
      console.log("Document written with ID: ", docRef.id);
      window.location.href = './index.html'
    } catch(e) {
      console.log("서버 에러: ", e);
    }
  }

  uploadFile();

}); // sendBtn
