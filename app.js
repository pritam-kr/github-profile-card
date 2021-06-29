const reppoUrl = "https://api.github.com/users/${inputText}/repos?page=1";

const inputUser = document.querySelector("#input-username");
const myForm = document.querySelector("#form");

async function getUserName(username) {
  const githubUrl = `https://api.github.com/users/${username}`;
  fetch(githubUrl)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
        console.log(data)
        var showGithubProfile = ''
      showGithubProfile = `
      
      <div class="github-card">
      <div class="profile">
              <img src="${data.avatar_url}" id="user-img">
      </div>
      <div class="github-content">
          <h4 class="name">${data.name}</h4>
          <p class="user-name">${data.login}</p>
          <p class="bio">${data.bio}</p>
          <ul>
              <li><span class="follower">${data.followers} </span>Followers</li>
              <li><span class="following">${data.following} </span> Following </li>
              <li><span class="reppo">${data.public_repos} </span>Repository</li>
          </ul>
          <ul>
              <li><span class="location"><i class="fas fa-globe-africa"></i></span> ${data.location}</li>
              <li><span class="company"><i class="fas fa-building"></i></span> ${data.company}</li>
              <li><span class="social"><i class="fab fa-twitter"></i></span> ${data.twitter_username}</li>
          </ul>
      </div>

      `
      document.querySelector('.github-card-content').innerHTML = showGithubProfile;
    });
}

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  var inputUserName = inputUser.value;
  if(inputUserName){
    getUserName(inputUserName);
    inputUser.value = '';
  }
  
});
