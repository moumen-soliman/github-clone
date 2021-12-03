var userInfo = {
    name: "Moumen Soliman",
    username: "moumen-soliman",
    bio: "Frontend Engineer",
    image: "https://avatars.githubusercontent.com/u/24474287?v=4"
};

var followersHandler = {
    follower: 77,
    following: 234,
    starsCount: 149
};

var userMainInfo = {
    location: "Egypt",
    email: "moumensoliman@gmail.com",
    link: {
        title: "Github Link",
        href: "#"
    }
};

var organization = [
    {
        name: "baims",
        private: false,
        link: '#',
        image: "https://avatars.githubusercontent.com/u/8783891?s=64&v=4"
    }
];

var reposArr = [
    {
        name: "repo-name",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae cupiditate totam similique iusto, quo aperiam odit animi fugiat harum nostrum officia eveniet nemo explicabo, ex blanditiis optio, in est ab.",
        language: "JavaScript",
        updateTime: "Updated 1 hour ago",
        public: true,
        topics: [{
            name: "JavaScript",
            link: "#"
        },{
            name: "React",
            link: "#"
        }]
    }
]

function userInfoFunc({name, bio, image, username}) {
    const userInfoContainer = `
        <div class="user-card-image">
            <img src="${image}" />
        </div>
        <div class="user-card-info">
            <h1>${name}</h1>
            <p>${username}</p>
            <span>${bio}</span>
        </div>
    `;
    return userInfoContainer;
}

function followersFunc({follower, following, starsCount}) {
    const followerHandler = `
        <span>
            ${follower} follower
        </span>
        <span>
            ${following} following
        </span>
        <span>
            ${starsCount} stars
        </span>
    `

    return followerHandler;
}

function userMainInfoFunc({location, email, link: {title, href}}) {
    const userMainInfoHandler = `
        <span>${location}</span>
        <a href="mailto:${email}">${email}</a>
        <a href="${href}" target="_blank">${title}</a>
    `

    return userMainInfoHandler;
}

function reposArrHandler(reposElements) {
    reposElements.map((elem, index) => {
        var repoCard = `<div class="repo-card index-number-${index}">
        <h3>
            <a>
                ${elem.name}
            </a>
            ${elem.public && `<span class="repo-status-label">
                Public
            </span>`}
        </h3>
        <p>
            ${elem.text}
        </p>
        <div class="card-topics">
            ${elem.topics.map(elemTopic => `<span>
            ${elemTopic.name}
        </span>`)}
        </div>
        <div class="card-time-lang-details">
            <span>
                ${elem.language}
            </span>
            <span>
                ${elem.updateTime}
            </span>
        </div>
    </div>`

        document.querySelector('.repos-container').innerHTML += repoCard
    })
}

function orgHandler(orgElemnt) {
    orgElemnt.map((elem, index) => {
        var organizationCard = !elem.private ? `
        <a class="index-number-${index}" href="${elem.link}">
            <img src="${elem.image}" alt="${elem.name} image" />
        </a>` : ''
        ;
        document.querySelector('.org-container').innerHTML += organizationCard;
    })
}

userMainInfoFunc(userMainInfo)
followersFunc(followersHandler)
userInfoFunc(userInfo)
reposArrHandler(reposArr)
orgHandler(organization)