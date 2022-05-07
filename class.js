
class Student {
    constructor(sId, sName) {
        this.id = sId;
        this.name = sName;
        this.school = "kalimunnesa school"
    }
}

const student1 = new Student(125, "rahim");
const student2 = new Student(155, "bangorali");

console.log(student1, student2)