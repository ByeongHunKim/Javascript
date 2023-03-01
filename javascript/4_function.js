// 함수 선언문

function multiply(a, b) {
  return a * b;
}

//---------------------------

// 함수 표현식

let multiply1 = function (a, b) {
  return a * b;
};

// 매개변수 (parameter, 인자)

let multiply2 = function (a, b) {
  console.log("a와b는:", a, b);
};

multiply2(1); // 1 undefined

// 반환값 - 함수는 호출한 코드에게 수행한 결과를 return(반환) 할 수 있다

function calArea(width, height) {
  var area = width * height;
  return area;
}

console.log(calArea(3, 5)); // 15
