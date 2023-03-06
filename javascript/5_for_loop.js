// for문
for (let i = 0; i < 2; i++) {
  console.log(i);
}

// 이중 for문
for (let i = 1; i <= 6; i++) {
  for (let j = 1; j <= 6; j++) {
    console.log(`i는 ${i}이며, j는 ${j}입니다`);
  }
}

// while문

let count = 0;
while (count < 3) {
  console.log("count", count);
  count++;
} // 0 1 2

// do while 문은 코드블록을 먼저 실행한 이후에 while 조건문을 비교하는 형태로 진행한다

let count2 = 0;

do {
  console.log("do while문 count2", count2);
  count2++;
} while (count2 < 3); // 0 1 2

// break문

let string = "hello world";
let index;

// 문자열은 유사배열이므로 for문을 통해 순회할 수 있다
for (let i = 0; i < string.length; i++) {
  // 문자열의 개별문자가 'l' 라면
  if (string[i] === "l") {
    index = i;
    break; // 반복문 탈출
  }
}

console.log("index", index); //2

// continue 문

let string1 = "hello world";
let count3 = 0;

for (let i = 0; i < string1.length; i++) {
  // 'l'이 아니면 현 지점에서 실행을 중단하고 반복문의 증감식으로 이동한다
  // continue 구문을 실행하게되면 밑에있는 구문이 실행하게 되지 않는다 해당되는 조건이 참인경우에 continue 구문이 실행되고 밑에는 실행되지 않고, 조건문의 증감으로 인하여 다음 값으로 진행된다
  if (string1[i] !== "l") continue;
  count3++; // continue 문이 실행되면 이 증감문은 실행되지않는다
}

console.log("count3", count3);
