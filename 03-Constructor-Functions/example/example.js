function Car(name, type, year){
  // this = {}.__proto__ === Car.prototype
  this.name = name
  this.type = type
  this.year = year
  this.keyInserted = false
  // { name : 'Corola', type: 'Toyota', year: 2005 }.__proto__ = Car.prototype
}

var instanceOfCar = new Car("Corola", "Toyota", 2005)

Car.prototype.startEngine = function() {
  if(this.keyInserted === false) {
    throw "Please insert a key"
  }
  return "Engine Started"
}

Car.prototype.insertKey = function() {
  this.keyInserted = !this.keyInserted
}
