// Question 2
console.log("Question 2:")

const gamesAPI = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const gamesContainer = document.querySelector(".container");
async function callGamesAPI(){
    const response = await fetch(gamesAPI);
    const results = await response.json();
    const data = results.results;
    console.log(data)
};
callGamesAPI();
