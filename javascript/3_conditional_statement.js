// 블록문 ---------------------------------------------
{
  let number1 = 10;
  console.log(number1); // 10
}

// 제어문
let x = 0;
while (x < 10) {
  x++;
}

console.log(x); // 10

// 함수 선언문
function sum(x, y) {
  return x + y;
}

console.log(sum(1, 2)); // 3

// --------------------------------------------------

// 조건문 --------------------------------------------

// if .. else 문

if (num > 0) {
  kind = "양수";
} else if (num < 0) {
  kind = "음수";
} else {
  kind = "영";
}

// switch 문

switch (area) {
  case 1:
    monthName = "Seoul";
  case 2:
    monthName = "Busan";
  default:
    monthName = "Jeju";
}

// default는 case1,2 해당되는 경우가 없을 때 적용되는 기본값이다
