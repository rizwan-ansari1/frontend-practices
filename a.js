const input = document.getElementById("usernameInput");
const btn = document.getElementById("searchBtn");
const errorMsg = document.getElementById("errorMsg");
const card = document.getElementById("profileCard");
const avatar = document.getElementById("avatar");
const nameEl = document.getElementById("name");
const usernameEl = document.getElementById("username");
const bioEl = document.getElementById("bio");
const followersEl = document.getElementById("followers");
const profileLink = document.getElementById("profileLink");

const usernamePattern = /^[a-zA-Z0-9-]{1,39}$/;

async function handleSearch() {
  const username = input.value.trim();
  errorMsg.textContent = "";
  if (!usernamePattern.test(username)) {
    errorMsg.textContent =
      "Please enter a valid GitHub username (letters, numbers, hyphens only). ";
    return;
  }

  btn.textContent = "Searching...";
  btn.disabled = true;

  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
      throw new Error("No GitHub user found with that username.");
    }
    const data = await response.json();

    avatar.src = data.avatar_url;
    nameEl.textContent = data.name || data.login;
    usernameEl.textContent = "@" + data.login;
    bioEl.textContent = data.bio || "No bio provided";
    followersEl.textContent = "Followers:" + data.followers;
    profileLink.href = data.html_url;
    card.classList.remove("hidden");
    localStorage.setItem("lastGithubSearch", username);

    console.log("Looks valid! Ready to fetch:", username);
  } catch (err) {
    errorMsg.textContent = err.message;
    card.classList.add("hidden");
  } finally {
    btn.textContent = "Search";
    btn.disabled = false;
  }
}

btn.addEventListener("click", handleSearch);

input.addEventListener("keyup", function (e) {
  if (event.key === "Enter") {
    handleSearch();
  }
});

window.addEventListener("load", function () {
  const savedUsername = localStorage.getItem("lastGithubSearch");
  if (savedUsername) {
    input.value = savedUsername;
    handleSearch();
  }
});
