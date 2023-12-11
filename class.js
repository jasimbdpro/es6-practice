class Student {
    constructor(sId, sName) {
        this.id = sId;
        this.name = sName;
        this.school = 'Kolimunnesa school'
    }
}
const student1 = new Student(12, 'Harry');
const student2 = new Student(13, 'Mina');
console.log(student1, student2);