// Class

// Class declarations
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    // Getter
    get area() {
        return this.calcArea();
    }

    // Method
    static calcArea() {
        return this.height * this.width
    }

    static showName = "Moumen"
}

const square = new Rectangle(10, 10);


class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} make a noise`)
    }
}

class Dog extends Animal {
    speak() {
        super.speak()
        console.log(`${this.name} say Hello`)
    }
}

var hello = new Dog("Hex");
var helloAnimal = new Animal("Hex2")