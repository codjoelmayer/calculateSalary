let hours = +prompt("Enter your hours worked: ")
let rate = +prompt("Enter your rate: ")
let salary = hours * rate 
let curFormat = Intl.NumberFormat()
console.log(
    `Your salary is R${curFormat.format(salary)}`);
// console.log(`Your salary is R${salary.toFixed(2)}`);