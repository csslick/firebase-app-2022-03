export const Nav = function () {
  
  return `
    <nav class="container">
      <h1 class="user-name display-6 pt-2">name</h1>
      <ul>
        <li><a href="./index.html">글 목록</a></li>
        <li id="upload-btn"><a href="./upload.html">글 올리기</a></li> 
        <li id="logout"><button>로그아웃</button></li>
        <li id="login-btn"><a href="./login.html">로그인</a></li>
      </ul>
    </nav>
  `;
};
