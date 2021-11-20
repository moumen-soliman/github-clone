// Functions

/* function helloWorld() {
    console.log('hello world')
}

helloWorld(); */

/*function rtAge(age) {
    const ageHandler = age + 1;

    return ageHandler
}


// High Order Function
 function customerFullInfo(name, lastName, age) {
    const customerFullHandler = `Name is ${helloName(defineName(name), lastName)}, Age is ${rtAge(age)}`;

    return customerFullHandler
}

function helloName(name, lastName) {
    const customer = `Hello ${name} ${lastName}`;
    return customer
}

function defineName(nameB) {
    return `${nameB}--from-defineName`
}

const helloHandler = customerFullInfo('moumen', 'soliman', rtAge(100))
//Name is Hello moumen--from-defineName soliman 101
console.log(helloHandler); */

// Rest Param
/*
function restFun(a, b, c, ...manyParam) {
    console.log("manyparam2", manyParam2)
    console.log("manyparam", manyParam)
}

restFun("one", "two", "three", "four", "five", "six", "four", "five", "six")
*/

// function Declaration vs expression
/*
rtAge(20)

function rtAge(age) {
    const ageHandler = age + 1;

    console.log(ageHandler)
}

//function expression

rtAge2(20)


const rtAge2 = function (age) {
    const ageHandler = age + 100;

    console.log(ageHandler)
}*/


//Arrow Function

/*const rtAge = (age) => age +1 ;

const person = {
    name: 'moumen',
    age: (age) => {
        const ageHandler = age + 100;
    
        return ageHandler
    }
}


setTimeout(() => console.log('hello form settime'),1000) */

//IIFE (Immediately Invoked Function Expression)

/* (function() {
    let testVar;
    let testVar2;
})()

testVar = 5;
testVar2 = 10 */