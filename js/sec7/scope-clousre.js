// Scope
/* var a = 1;
var b = 2;

if(true) {
    var a = 30;
    const b = 40;

    console.log(a)
    console.log(b)
}
console.log(a)
console.log(b)

// Lexical Scope
function parentFamily() {
    var name = "John";
    // name variable
    // adult variable XXX
    // child variable XXX
    function adultFamily() {
        // name variable
        // adult variable
        // child variable XXXX
        var adult = "john 2";
        function childFamily() {
            var child = "john 3"
            // name variable
            // adult variable
            // child variable
        }
    }
}
*/

// Clousre
/*
function helloFunc() {
    var name = "moumen";
    function sayHello() {
        console.log(name)
    }

    return sayHello
}

var callHelloFunc = helloFunc();
 callHelloFunc()

function sayHello(helloWrd = "Hello") {
    let myHelloWord = helloWrd.toLowerCase();
    function generateHelloMessage(name) {
        return `${myHelloWord} ${name}`
    }

    return generateHelloMessage
}

var sayHelloCall = sayHello();
console.log(sayHelloCall('moumen'))

// Private Variables
function generateAge(name) {
    let age = 0; // private variable

    return function getAgeBigger() {
        age++
        return `${name} your new age is ${age}`
    }
}

const generateAgeCaller = generateAge("moumen")
*/

// Hoisting
helloWorld()

const helloWorld =() => {
    console.log("hello world")
}
