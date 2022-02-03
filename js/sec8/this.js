// this Keyword
const human = {
    firstName: "Moumen",
    lastName: "Soliman",
    age: 100,
    generateHumanID: function () {
        return this
    }
}

let hello = this;

function testFunction() {
    return this;
}

function generateHelloMessage() {
    console.log(this)
}

generateHelloMessage()

var editProfileButton = document.getElementById("edit-button");

editProfileButton.addEventListener("click", generateHelloMessage)