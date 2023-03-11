// const arr = [1, 2, 3];
// const PI = 3.14;
// PI = 3.15; // 에러발생 ( 재정의 불가 )

function test() {
  if (true) {
    var b = 1;
    let c = 2;
  }
  console.log("b는?", b); // 1
  console.log("c는?", c); // 블록밖에서는 접근 불가 -> 에러발생
}

test();
