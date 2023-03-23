function addFunc(a, b) {
  return a + b;
}

const data = [1, 2];
const result = addFunc(...data);
console.log("result", result); // 3

const data1 = [1, 2];
const data2 = [3, 4];
const resultOfData = [0, ...data1, ...data2, 5];
console.log("resultOfData", resultOfData); // [ 0, 1, 2, 3, 4, 5 ]
console.log("the length of addFuncresultOfData is ", resultOfData.length); // 6

const resultOfString = [..."abcde"];
console.log("resultOfString", resultOfString); // [ 'a', 'b', 'c', 'd', 'e' ]

//-----------------------------------------

// rest 연산자-----------------------------

function restFunc(a, b, ...arr) {
  console.log("arr is", arr); //[ 3, 4, 5 ]
}
restFunc(1, 2, 3, 4, 5);
