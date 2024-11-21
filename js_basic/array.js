const a = [1, 2, 3];
console.log(a); // [1, 2, 3]


Array.prototype.showLength = function() {
    console.log(this.length);
}

a.showLength()


// 자바의 클래스 토입
class People {
    constructor(name) {
        this.name = name;
    }

    printName() {
        console.log(this.name);
    }
}

const foo = new People(`foo-name`);
foo.printName();    // foo-name