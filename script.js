const API_KEY = "657a6ddfe7f74d1e97d443c883c67e9e";
const BASE_URL = "https://api.rawg.io/api/games";

let currentSearch = "";
let currentPage = 1;
let isLoading = false;
let hasMore = true;
let gamesMap = new Map();

const searchInput = document.getElementById("search-input");
const searchSpinner = document.getElementById("search-spinner");
const gameGrid = document.getElementById("game-grid");
const mainSpinner = document.getElementById("main-spinner");
const observerTarget = document.getElementById("observer-target");

function debounce(func, delay) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
    };
}

async function fetchGames(reset = false) {
    if (isLoading || (!hasMore && !reset)) return;
    isLoading = true;

    if (reset) {
        currentPage = 1;
        gameGrid.innerHTML = "";
        gamesMap.clear();
        hasMore = true;
    }

    if (currentPage === 1) {
        if (currentSearch) searchSpinner.classList.remove("hidden");
        else mainSpinner.classList.remove("hidden");
    }

    try {
        let url = `${BASE_URL}?key=${API_KEY}&page=${currentPage}&page_size=20`;
        if (currentSearch) url += `&search=${encodeURIComponent(currentSearch)}`;

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
        searchSpinner.classList.add("hidden");
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

const handleSearch = debounce((e) => {
    currentSearch = e.target.value;
    fetchGames(true);
}, 500);

searchInput.addEventListener("input", handleSearch);

const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        fetchGames();
    }
}, { rootMargin: '100px' });
observer.observe(observerTarget);

fetchGames();
