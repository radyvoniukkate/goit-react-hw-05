import  { useEffect, useState } from "react";
import { fetchMovies } from "/src/Api.js";
import MovieList from "/src/components/MovieList/MovieList";
import styles from "./HomePage.module.css"

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies().then((data) => setMovies(data));
  }, []);

  return (
    <div className={styles.div}>
      <h1 className={styles.mainText}>Trending today</h1>
      <MovieList movies={movies}/>
    </div>
  );
}

export default HomePage;
