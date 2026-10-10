console.log('app.js 로드됨');


/* 요소 핸들 얻기, 클릭시 로그 출력
const 생성자명 = document.getElementById('태그명'); // 요소 핸들 얻기
생성자명.addEventListener('click', function () {      // 클릭 = 인터럽트, 함수 = 콜백
  console.log('btn01 클릭됨');
}); */

// 단일 요소 디버깅(동작시 콘솔에서 로그 찍음)
/* const click_01 = document.getElementById('btn01'); // 요소 핸들 얻기
click_01.addEventListener('click', function () {      // 클릭 = 인터럽트, 함수 = 콜백
  console.log('btn01 클릭됨');
});
const click_02 = document.getElementById('btn02'); // 요소 핸들 얻기
click_02.addEventListener('click', function () {      // 클릭 = 인터럽트, 함수 = 콜백
  console.log('btn02 클릭됨');
}); 
const click_03 = document.getElementById('btn03'); // 요소 핸들 얻기
click_03.addEventListener('click', function () {      // 클릭 = 인터럽트, 함수 = 콜백
  console.log('btn03 클릭됨');
}); */


// 생성자 키워드 선언된 태그 개수 만큼 반복해서 태그명 로그 찍음 
const items = document.querySelectorAll('button');
    // console.log(items); // 현재 키워드로 생성된 태그 모두 불러오기
    // console.log(items.length);  // 현재 태그 개수 (길이)
items.forEach(function (item) {     // item 요소 개수 만큼 반복할거야
    // console.log(item);   // 태그 등록 확인용
    item.addEventListener('click', function (event) {
    console.log(event.target.id);
    });
});

function formatDate(date) {
    const year = date.getFullYear();
    const monthNum = date.getMonth()+1;
    const month = String(monthNum).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
console.log(formatDate(new Date(2026, 0, 5)));

const showDate = document.getElementById('now-date') ;
showDate.textContent = formatDate(new Date());