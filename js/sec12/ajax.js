//  const endpoint = "https://api.github.com/users/moumen-soliman";
//  const getEndPoint = fetch(endpoint)

 async function getGithubUsernameData(username) {
     console.log("Loading")
     const fetching = await fetch(`https://api.github.com/users/${username}`)

     return fetching
 }

 getGithubUsernameData("moumen-soliman").then(res => {
    return res.json()
})
.then(res => {
    console.log(res)
})
.catch(err => {
    console.log(err)
})