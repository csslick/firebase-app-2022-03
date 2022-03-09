# firebase-app-2022-03
## firebase v9.6
1. 파이어베이스 설정 및 초기화
2. DB, Collection 추가
3. DB 읽기 - 제품 표시 페이지(index.html)
4. DB 쓰기 - 올리기 페이지(upload.html)
5. 이미지 업로드 및 참조URL
6. 회원가입
  - 유저정보: uid 확인
  - displayName
7. 로그아웃
  - 로그인/로그아웃 상태 onAuthStateChanged
  - DB 쓰기 권한(write) 설정 - 로그인 시에만 가능
8. Nav 컴포넌트 & 접속상태 별 로그인/로그아웃 상태 - 메뉴 표시
  - 글 올리기 취소 버튼
  - 글 올리기는 로그인 시에만 표시
  - localStorage로 로그인 상태 저장하고 불러오기(최적화)