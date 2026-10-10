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
// console.log(formatDate(new Date(2026, 0, 5)));

const showDate = document.getElementById('now-date') ;
showDate.textContent = formatDate(new Date());

/* // Console: 문자열 저장과 읽기
localStorage.setItem('test', 'hello');
console.log(localStorage.getItem('test'));      // "hello"
console.log(localStorage.getItem('없는키'));   // null */

/* // Console: 객체 ↔ 문자열 변환
const a = { date: '2026-10-10', status: 'present' }
JSON.stringify(a)                 // 따옴표로 감싼 문자열이 나옴
console.log(JSON.parse(JSON.stringify(a)))     // 다시 펼칠 수 있는 객체가 나옴 */

// app.js: 맨 아래에 추가
const STORAGE_KEY = 'records';   // 저장 키 이름. 두 함수가 같이 사용

function loadRecords() {
  const text = localStorage.getItem(STORAGE_KEY);
  if (text === null) {
    return [];                  // ① 저장된 것이 없을 때: 빈 배열
  }
  return JSON.parse(text);              // ② 문자열을 배열로 되돌리기
}

function saveRecord(record) {
  const records = loadRecords();           // ③ 기존 배열 불러오기 (바로 위 함수 호출)
  records.push(record);          // 배열 끝에 추가
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));  // ④ 배열을 문자열로 바꿔 저장
}

saveRecord({ date: '2026-10-10', status: 'present' })
// saveRecord({ date: '2026-10-10', status: 'present' })
loadRecords()     // 항목 1개짜리 배열이 나오면 성공

const saveButton = document.getElementById('save-today');
saveButton.addEventListener('click', function () {
  const record = { date: formatDate(new Date()), status: 'present' };  // ⑤ 1-2에서 만든 함수로 오늘 날짜 만들기
  saveRecord(record);
});