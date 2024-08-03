import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { api } from "/src/Api.js";
import MovieList from "/src/components/MovieList/MovieList";
import styles from "./MoviesPage.module.css";

function MoviesPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get("query");
    if (searchQuery) {
      setQuery(searchQuery);
      fetchMovies(searchQuery);
    }
  }, [searchParams]);

  const fetchMovies = async (searchQuery) => {
    try {
      const response = await api.get(`/search/movie?query=${searchQuery}`);
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handleSearch = () => {
    setSearchParams({ query });
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
      <button onClick={handleSearch} className={styles.btn}>
        Search
      </button>
      <MovieList movies={movies} />
    </div>
  );
}

export default MoviesPage;
