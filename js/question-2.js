// Question 2
const gamesAPI = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const gamesContainer = document.querySelector(".container");
const header = document.querySelector("h1");
async function callGamesAPI() {
    try {
        const response = await fetch(gamesAPI);
        const results = await response.json();
        gamesContainer.innerHTML = "";
        const data = results.results;

        for (i = 0; i < data.length; i++) {
            if (i === 8) {
                break
            }

            gamesContainer.innerHTML += `
            <div class="game">
                <h2 class="gamename">${data[i].name}</h2>
                <div class="gamenumbers">
                    <p>Rating: <strong><span class="gamerating">${data[i].rating}/</span></strong>5</p>
                    <p>Tags: ${data[i].tags.length}</p>
                </div>
            </div>`
        }
    }

    catch (err) {
        console.log(err);
        header.innerHTML = "";
        gamesContainer.innerHTML = `
        <div class="error">
        <p>Oops!</p>
        <p class="errormessage">${err}</p>
        <p>Please refresh the page and pray for a better outcome</p>
        </div>`
    }
};

callGamesAPI();
