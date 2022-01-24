/** var calcArray = [1, 4, 5, 20, 10, 30, 50, 60];

var animals = ["lion", "tiger", "dog"];

var abcArr = ["a", "b", "c", "d", "f", "e"]

// Mapping
const animalsList = (element, indexItem) => document.querySelector('.repos-container').innerHTML += `<h1 class="${indexItem}"> ${element} </h1>`;

animals.map((elem, index) => animalsList(elem, index));

// forEach
const sortByNumber = (elem, index) => {
    const elemntName = `${elem} -`
    const currentNumber = index + 1;
    const finalElement  = `${elemntName} ${currentNumber}`

    return finalElement
}

// animals.sort().forEach((elem, index) => console.log(sortByNumber(elem, index)))

// reduce
const reduceHandler = (prevValue, currentValue) => {
    //console.log(`${prevValue} - ${currentValue}`)
    return prevValue + currentValue
}
abcArr.reduce(reduceHandler, 0)

// for family
/// for loop
let sum = 0

for(var i = 0; i < calcArray.length; i++) {
    sum += calcArray[i]
}
// console.log(sum)

///for of
var name = "moumen";

for(elem of name) {
    //console.log(elem);
}

///for in

var objName = {
    first: "moumen",
    second: "soliman"
}

for(elem in name) {
    // console.log(name[elem]);
}

// while
var sumPlus = 0;

while (sumPlus < 20) {
    sumPlus++;
    console.log(sumPlus)
}

do {
    sumPlus++;
    console.log(sumPlus)
} while (sumPlus < 20) **/