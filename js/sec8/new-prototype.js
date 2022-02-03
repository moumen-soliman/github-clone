// new keyword & prototype

function Car(make, model, year, newObj) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.newObj = newObj
}

const car1 = new Car("Toyota", "Corolla", 1990)
const car2 = new Car("Citreon", "c-eleyse", 2010)
const car3 = new Car("Citreon", "c-eleyse", 2010, car1)
