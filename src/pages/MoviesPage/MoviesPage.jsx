import { useState } from "react";
import { api } from "/src/Api.js";
import MovieList from "/src/components/MovieList/MovieList";
import styles from "./MoviesPage.module.css";


function MoviesPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    const response = await api.get(`/search/movie?query=${query}`);
    setMovies(response.data.results);
  };

  return (
    <div className={styles.div}>
      <h1 className={styles.mainText}>Search Movies</h1>
      <input
        type="text"
        value={query}
        className={styles.input}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchMovies} className={styles.btn}>
        Search
      </button>
      <MovieList movies={movies} />
    </div>
  );
}

export default MoviesPage;
