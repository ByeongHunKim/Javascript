// todo array destructuring
let arr = [1, 2, 3, 4];

let [a, b, c, d] = arr;
// a : 1, b : 2, c : 3, d: 4

let arr2 = [1, 2, 3];

let [e, f, g, h] = arr2;
// e : 1, f : 2, g : 3, h: undefined

let [ i, , k] = [1, 2, 3];
// i : 1, k : 3

//-------------------------------------

// todo object destucturing
const obj = {
    name: "Hun",
    age: "27",
    job: "Software Engineer"
}

let {name, age, job } = obj
// Hun, 27, Software Engineer

//-------------------------------------
