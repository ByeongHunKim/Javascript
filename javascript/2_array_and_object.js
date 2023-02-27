// 배열의 생성

let arr = ["a", "b"];
console.log("배열의 생성 : arr[1] -->", arr[1]); // b
console.log("배열의 생성 : arr.length -->", arr.length); //  2
console.log("배열의 생성 : typeof arr -->", typeof arr); // object

let arr2 = new Array(1, 2);
console.log("배열의 생성 : arr2 -->", arr2); // [ 1, 2 ]

// 배열 요소의 추가와 삭제

let arr3 = [];
console.log("배열 요소의 추가와 삭제 : arr[0]-->", arr3); // undefined

arr3[1] = 1;

arr3[3] = 2;

console.log("배열 요소의 추가와 삭제 : arr3 -->", arr3);
console.log("배열 요소의 추가와 삭제 : arr3.length -->", arr3.length);

delete arr3[1];
console.log("배열 요소의 추가와 삭제 : delete arr3 -->", arr3);

arr3.splice(3, 1);
console.log("배열 요소의 추가와 삭제 : splice arr3 -->", arr3);

// 배열의 순회

const arr4 = [0, 1, 2, 3];

for (let i = 0; i < arr4.length; i++) {
  console.log("for문 : i, arr4[i]", i, arr4[i]);
}

for (const key in arr4) {
  console.log("for in 문 : key:" + key, "value:" + arr4[key]);
}

arr4.forEach((item, index) => console.log("forEach문:", index, item));
// item과 index 이것이 의미하는 바는 arr4에 있는 item의 데이터는 0~3 이고, index는 말 그대로 위치를 의미한다

// 객체

let person = {
  name: "husnman",
  gender: "male",
};

// 프로퍼티 추가
let person2 = new Object();
person2.name = "hunsman";
person2.gender = "male";

console.log("객체 : person.gender -->", person.gender);
console.log("객체 : person.gender -->", person["gender"]);
console.log("객체 : person.age -->", person.age);

person["area"] = "Seoul";

console.log("객체 : person.area -->", person["area"]);

for (let prop in person) {
  console.log("객체: for문", prop + ":" + person[prop]);
}
