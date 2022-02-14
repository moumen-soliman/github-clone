import {fetchURL, getGithubAPI} from "../Utils/index.js";
import {userInfoFunc, userMainInfoFunc, followersFunc, orgHandler, reposArrHandler} from "../Utils/DOM-helpers.js";

let currentUserData = {};
var currentUserReposData = null;

document.querySelector(".hide-during-process").getElementsByClassName.display ="block"

getGithubAPI("airbnb").then(res => res.json()).then(res => {
    currentUserData = res;

    userInfoFunc(res)
    followersFunc(res)
    userMainInfoFunc(res)
}).then(() => {
    fetchURL(currentUserData.repos_url).then(res => res.json()).then(resRepos => {
        reposArrHandler(resRepos)
    })
}).then(() => {
    fetchURL(currentUserData.organizations_url).then(res => res.json()).then(orgRepos => {
        orgHandler(orgRepos)
    })
}).finally(() =>   document.querySelector(".hide-during-process").style.display ="none")
