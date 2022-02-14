import {querySelectorWithInnerHTML} from "./index.js";

export function userInfoFunc({name, bio, avatar_url, login}) {
    const userInfoContainer = `
        <div class="user-card-image">
            <img src="${avatar_url}" />
        </div>
        <div class="user-card-info">
            <h1>${name}</h1>
            <p>${login}</p>
            ${bio ? `<span>${bio}</span>` : ""}
        </div>
    `;

    querySelectorWithInnerHTML('.user-info-data').innerHTML = userInfoContainer;
    return userInfoContainer;
}

export function followersFunc({followers, following, public_repos}) {
    const followerHandler = `
        <span>
            ${followers} followers
        </span>
        <span>
            ${following} following
        </span>
        <span>
            ${public_repos} public repos
        </span>
    `

    querySelectorWithInnerHTML('.user-follow-info').innerHTML = followerHandler;
    return followerHandler;
}

export function userMainInfoFunc({location, email, html_url, login}) {
    const userMainInfoHandler = `
        <span>${location}</span>
        ${email ? `<a href="mailto:${email}">${email}</a>` : ''}
        <a href="${html_url}" target="_blank">${login}</a>
    `
    querySelectorWithInnerHTML('.user-main-info').innerHTML = userMainInfoHandler;

    return userMainInfoHandler;
}

export function reposArrHandler(reposElements) {
    reposElements.map((elem, index) => {
        var repoCard = `<div class="repo-card index-number-${index}">
        <h3>
            <a href="${elem.svn_url}">
                ${elem.name}
            </a>
            ${elem.public ? `<span class="repo-status-label">
                Public
            </span>` : ''}
        </h3>
        <p>
            ${elem.description}
        </p>
        <div class="card-topics">
            ${elem.topics.map(elemTopic => `<span>
            ${elemTopic}
        </span>`).join(' ')}
        </div>
        <div class="card-time-lang-details">
            <span>
                ${elem.language ? elem.language : ""}
            </span>
            <span>
                ${new Date(elem.updated_at)}
            </span>
        </div>
    </div>`

    querySelectorWithInnerHTML('.repos-container').innerHTML += repoCard
    })
}

export function orgHandler(orgElemnt) {
    orgElemnt.map((elem, index) => {
        var organizationCard = !elem.private ? `
        <a class="index-number-${index}" href="${elem.url}">
            <img src="${elem.avatar_url}" alt="${elem.login} image" />
        </a>` : ''
        ;
        querySelectorWithInnerHTML('.org-container').innerHTML += organizationCard;
    })
}
