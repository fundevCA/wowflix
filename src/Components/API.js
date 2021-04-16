import axios from "axios";

const base = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "b628b0f65cc8570a11e0e393168cfb49",
    language: "en-US"
  }
});

export const movieAPI = {
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
  search: keyword =>
    base.get("search/movie", {
      params: {
        query: encodeURIComponent(keyword)
      }
    })
};

export const tvAPI = {
  airingToday: () => base.get("tv/airing_today"),
  popular: () => base.get("tv/popular"),
  topRated: () => base.get("tv/top_rated"),
  detail: id => base.get(`tv/${id}`),
  search: keyword =>
    base.get("search/tv", {
      params: {
        query: encodeURIComponent(keyword)
      }
    })
};
