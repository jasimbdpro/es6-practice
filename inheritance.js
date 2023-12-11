class Parent {
    constructor() {
        this.fatherName = 'Schwerznegger';
    }
}
class Child extends Parent {
    constructor(names) {
        super();
        this.names = names;
    }
    getFullName() {
        return this.names + ' ' + this.fatherName;
    }
}
const baby = new Child('Arnold')
const baby2 = new Child('Tom')
console.log(baby.getFullName())
console.log(baby2.getFullName())
