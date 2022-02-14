import {githubUsersEndPoint} from "./constants.js";

export const fetchURL = async (url) => {
    const fetching = await fetch(`${url}`)

    return fetching
}

export const getGithubAPI = async (username) => {
    console.log("Loading")
    const fetching = await fetch(`${githubUsersEndPoint}${username}`)

    return fetching
}

export const querySelectorWithInnerHTML = (className) => document.querySelector(`${className}`);
