
class Parents {
    constructor() {
        this.FatherName = "amir ali"
    }
}
class Child extends Parents {
    constructor(name) {
        super();
        this.name = name
    }
    getFullname(){
        return  this.name + " " + this.FatherName
    }
}


const baby = new Child("sohag");
console.log(baby.getFullname())
const baby2 = new Child("abbas");
console.log(baby2)