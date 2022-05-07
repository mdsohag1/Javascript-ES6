
var num1 = [12,45,15,23,10,4,2,4]
var num2 = [12,451,23,10,4,2,4]

// var num3 = [num1, num2]
// console.log(num3)

var num3 = [...num1, ...num2]
console.log(num3)