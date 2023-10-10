document.getElementById("search").addEventListener("click", () => {
    const username = document.getElementById("username").value;
    fetch(`https://api.github.com/users/${username}`)
        .then((response) => response.json())
        .then((data) => {
            const resultElement = document.getElementById("result");
            resultElement.innerHTML = `<img src="${data.avatar_url}" alt="User Avatar" width="100">
                <hr>
                <h2>${data.name}</h2>
                <p>Username: ${data.login}</p>
                <p>Followers: ${data.followers}</p>
                <p>Following: ${data.following}</p>
                <p>Public Repositories: ${data.public_repos}</p>
                <p>Location: ${data.location}</p>
                <p>Joined GitHub: ${new Date(data.created_at).toLocaleDateString()}</p>`;
        })
        .catch((error) => {
            console.error("Error fetching user data:", error);
            document.getElementById("result").innerHTML = "User not found.";
        });
});
