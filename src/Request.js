const key="7fa8c15355e628fa1e762863622f32d1";
const base_url = "https://api.themoviedb.org/3"

const requests ={
    requestsPopular: `${base_url}/movie/popular?api_key=${key}&language=en-U56&pages=1`,
    requestsTopRated: `${base_url}/movie/top_rated?api_key=${key}&language=en-U56&pages=1`,
    requestsUpComing: `${base_url}/movie/upcoming?api_key=${key}&language=en-U56&pages=1`,
    requestsHorror: `${base_url}/movie/movie?api_key=${key}&language=en-U56&pages=1`,
    requestsTrending: `${base_url}/movie/top_rated?api_key=${key}&language=en-U56&pages=2`


};
export default requests;