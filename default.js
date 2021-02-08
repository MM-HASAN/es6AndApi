
// In es6 parameter can be gained default value. here num2=20 is default;
function addNumber( num1, num2=20){
  return num1+num2;
}


const myNumber = addNumber(3)

console.log(myNumber);