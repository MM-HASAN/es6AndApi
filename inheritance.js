

class Father{
  constructor(fName) {
    this.fName = "Md. mahmudul Hasan";
  }
}
class Child extends Father{
  constructor(name) {
    super();
    this.name = name;
  }

  getNames(brother){
    return this.fName + '  ' + this.name +  ' '+ brother;
  }
}


const firstChild = new Child('shakir');
const secondChild = new Child('shadik');
//console.log( firstChild, secondChild);

console.log(firstChild.getNames("Kamrul hasan"))