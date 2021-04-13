import axios from "axios";

const base = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "b628b0f65cc8570a11e0e393168cfb49",
    language: "en-US"
  }
});

const movieAPI = {
  nowPlaying: () => base.get("movie/now_playing"),
  popular: () => base.get("movie/popular"),
  topRated: () => base.get("movie/top_rated"),
  upcoming: () => base.get("movie/upcoming"),
  detail: id =>
    base.get(`movie/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),
  search: () =>
    base.get("search/movie", {
      params: {
        query: keyword => encodeURIComponent(keyword)
      }
    })
};

export default { movieAPI };
