const USER_FOLLOW_INFO = "user-follow-info"
var userFollowInfo = document.querySelector(".user-follow-info");

// Handle buttons
var addUserInfoText = document.querySelector("#edit-button2");
var addToLocalStorageUserInfoText = document.querySelector("#edit-button");
var removeItemLocalStorage = document.querySelector("#edit-button4");

const handleSetLocalStorage = (newNumber) => {
    // setItem
    localStorage.setItem(USER_FOLLOW_INFO, userFollowInfo.innerText += newNumber)
}

const handleGetLocalStorage = () => {
    // getItem
    userFollowInfo.innerText = localStorage.getItem(USER_FOLLOW_INFO);
}

const removeSpesificItem = (itemKey) => localStorage.removeItem(itemKey)

const clearAllLocalStorage = () => localStorage.clear();

addToLocalStorageUserInfoText.addEventListener("click", () => handleSetLocalStorage(200))

addUserInfoText.addEventListener("click", handleGetLocalStorage)

removeItemLocalStorage.addEventListener("click", () => removeSpesificItem(USER_FOLLOW_INFO))

window.onload = () => handleGetLocalStorage()