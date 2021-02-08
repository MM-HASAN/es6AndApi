const names = ['karim', 'rahim', 'jabed']
names.push('jobeda khatun')

//elements add in const array but array not re assigned.
console.log(names)

//TypeError: Assignment to constant variable. forbidden.
//names = [2, 5, 5]
console.log(names)



var sum = 0;
for(var i = 0; i<=10; i++){
  sum = sum+i;
  console.log(sum)
}
console.log(i)
console.log('the sum or for loop is', sum )