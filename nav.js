export const Nav = function () {
  
  return `
    <nav>
      <div class="container">
        <h1 class="display-6">
          <a class='logo' href='./'>Blog</a>
        </h1>
        <ul>
          <li><a href="./index.html">글 목록</a></li>
          <li id="upload-btn"><a href="./upload.html">글 올리기</a></li> 
          <li id="login-btn"><a href="./login.html">로그인</a></li>
        </ul>
        <button id="logout" class="btn-primary">로그아웃</button>
        <div class="user-info">
          user: <span><span>
        </div>
      </div><!-- container -->
    </nav>
  `;
};
