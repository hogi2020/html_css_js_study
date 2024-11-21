const a = [1, 2, 3];

console.log(a); // [1, 2, 3]

// prototype
function Person(name) {
    this.name = name
}

Person.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name}`);
}
const john = new Person('john');
john.sayHello()


// Object create를 사용한 프로토타입 설정
const animal = {
    speak: function() {
        console.log("I make a sound");
    }
}

const dog = Object.create(animal)
dog.speak();


// ES6 이후로 class 키워드를 사용해 더 직관적인 프로그래밍 가능
class Person2 {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const jane = new Person("jane");
jane.sayHello();

