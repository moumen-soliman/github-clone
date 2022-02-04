
const USER_FOLLOW_INFO_SESSION = "user-main-info-session-storage"
var userMainInfoHTML = document.querySelector(".user-main-info");

var addUserMainInfoText = document.querySelector("#edit-button-session");

const handleSetSessionStorage = (newNumber) => {
    console.log(userMainInfoHTML)
    // setItem
    sessionStorage.setItem(USER_FOLLOW_INFO_SESSION, userMainInfoHTML.innerText += newNumber);
}

addUserMainInfoText.addEventListener("click", () => handleSetSessionStorage("100"))
