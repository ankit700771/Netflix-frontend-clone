const API_KEY = "e4e125116e226248275fce57220a1c2a";

const links = {
    netflix_orignal : `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetch_tranding : `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetch_comedy : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetch_horror : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetch_romantic : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`
};


export default links;

