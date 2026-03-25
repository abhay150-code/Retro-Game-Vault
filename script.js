const API_KEY = "657a6ddfe7f74d1e97d443c883c67e9e";
const BASE_URL = "https://api.rawg.io/api/games";

let currentPage = 1;
let isLoading = false;
let hasMore = true;

async function fetchGames() {
    if (isLoading || !hasMore) return;
    isLoading = true;

    try {
        let url = `${BASE_URL}?key=${API_KEY}&page=${currentPage}&page_size=20`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.next === null) {
            hasMore = false;
        }

        console.log(data.results);
        currentPage++;
    } catch (error) {
        console.error(error);
    } finally {
        isLoading = false;
    }
}

fetchGames();
