const key="88e0fe3992702ce524390615454e0c7c";
const base_url = "https://api.themoviedb.org/3"

const requests ={
    requestsPopular: `${base_url}/movie/popular?api_key=${key}&language=en-U56&pages=1`,
    requestsTopRated: `${base_url}/movie/top_rated?api_key=${key}&language=en-U56&pages=1`,
    requestsUpComing: `${base_url}/movie/upcoming?api_key=${key}&language=en-U56&pages=1`,
    requestsHorror: `${base_url}/search/movie?api_key=${key}&language=en-U56&query=horror&page1&include_ad`,
    requestsTrending: `${base_url}/movie/popular?api_key=${key}&language=en-U56&pages=2`

    // getActionMovies:`${base_url}/discover/movie?api_key=${api_key}&with_genres=28`,
    // getComedyMovies:`${base_url}/discover/movie?api_key=${api_key}&with_genres=35`,
    // getHorrorMovies:`${base_url}/discover/movie?api_key=${api_key}&with_genres=27`,
    // getRomanceMovies:`${base_url}/discover/movie?api_key=${api_key}&with_genres=10749`,

    // netflixOriginals:`${base_url}/discover/tv?api_key=${api_key}&with_networks=213`,



};
export default requests;