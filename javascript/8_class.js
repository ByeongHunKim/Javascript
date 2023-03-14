// before
function Animal(name){
    this.name = name;
}

Animal.prototype.getName = function () {
    return this.name;
};

let lion = new Animal('lion');
console.log('normalAnimal', lion.getName()); // lion

// after - class

class AnimalClass {
    constructor(name) {
        this.name = name;
        this.type = "animal";
    }
    getName(){
        return this.name;
    }}

let animal2 = new AnimalClass("lion");
console.log('AnimalClass', animal2.getName("lion")); // lion
console.log('AnimalClass type is ', typeof AnimalClass); // function

// 상속

class Lion extends Animal{
    constructor(name) {
        super(name);
        this.type = "lion";
    }
}

let lion2 = new Lion("king");
console.log('is extends??',lion2 instanceof Animal); // true
console.log('what is lion2 name?', lion2.getName()); // king