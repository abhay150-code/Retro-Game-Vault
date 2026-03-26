const API_KEY = "657a6ddfe7f74d1e97d443c883c67e9e";
const BASE_URL = "https://api.rawg.io/api/games";

let currentPage = 1;
let isLoading = false;
let hasMore = true;
let gamesMap = new Map();

const gameGrid = document.getElementById("game-grid");
const mainSpinner = document.getElementById("main-spinner");

async function fetchGames() {
    if (isLoading || !hasMore) return;
    isLoading = true;

    if (currentPage === 1) {
        mainSpinner.classList.remove("hidden");
    }

    try {
        let url = `${BASE_URL}?key=${API_KEY}&page=${currentPage}&page_size=20`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.next === null) {
            hasMore = false;
        }

        data.results.forEach(game => {
            gamesMap.set(game.id, game);
            renderGameCard(game);
        });

        currentPage++;
    } catch (error) {
        console.error(error);
    } finally {
        isLoading = false;
        mainSpinner.classList.add("hidden");
    }
}

function renderGameCard(game) {
    const card = document.createElement("div");
    card.className = "game-card";
    
    const imgUrl = game.background_image || "https://via.placeholder.com/600x400?text=No+Image";
    const date = game.released ? new Date(game.released).getFullYear() : "N/A";

    card.innerHTML = `
        <div class="game-card-img-container">
            <img src="${imgUrl}" alt="${game.name}" class="poster" loading="lazy">
        </div>
        <div class="game-card-content">
            <h3 class="game-card-title">${game.name}</h3>
            <div class="game-card-meta">
                <span>⭐ ${game.rating || 'N/A'}</span>
                <span>📅 ${date}</span>
            </div>
        </div>
    `;
    
    gameGrid.appendChild(card);
}

fetchGames();
