var editButton = document.querySelector('#edit-button');

const youOutFromEditButton = () => console.log("Bye FROM EVENT")

// editButton.addEventListener('mouseover', youClickedMe)

// editButton.addEventListener('mouseout', youOutFromEditButton)

// editButton.addEventListener('click', function(e) {
//    console.log(e.target)
// })

const youClickedMe = (e) => {
    console.log("You click on button")
    console.log(e.target)
}

window.addEventListener("click", function(e) {
    console.log("You click on window")
    console.log(e.target)
}, {capture: true})


var allButtons = document.querySelectorAll('.edit-button');

allButtons.forEach((item) => {
    item.addEventListener("click", youClickedMe)
})