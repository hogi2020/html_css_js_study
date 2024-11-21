
function isGlobal() {
    console.log(this === global);
}
isGlobal();


function printName() {
    console.log(this.name);
}
printName();


function printName() {
    console.log(this.name);
}

const obj = {
    name: 'obj-name',
    printName: printName
}

obj.printName();