import axios from "axios";

const API_URL = "https://api.themoviedb.org/3";
const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGRhZTg4ZTczZWE1ODNjZTAzZWJiMjU1ZWFlZmU3OSIsIm5iZiI6MTcyMjU0NDI1OC44MzE5NjYsInN1YiI6IjY2YTkzZmY3ZDllYjNjZTRkY2VlZTllOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.acfUHPc-483x69E7WCsKcBNN82j6emigf-I-v9xQlMg";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

export const fetchMovies = async () => {
  const response = await api.get("/trending/movie/day");
  return response.data.results;
};

export const fetchMovieDetails = async (id) => {
  const response = await api.get(`/movie/${id}`);
  return response.data;
};

export const fetchMovieCast = async (id) => {
  const response = await api.get(`/movie/${id}/credits`);
  return response.data.cast;
};

export const fetchMovieReviews = async (id) => {
  const response = await api.get(`/movie/${id}/reviews`);
  return response.data.results;
};
