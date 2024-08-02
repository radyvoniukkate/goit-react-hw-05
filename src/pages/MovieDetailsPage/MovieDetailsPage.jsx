import { useEffect, useState, Suspense, lazy, useRef } from "react";
import {
  useParams,
  Link,
  useLocation,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { fetchMovieDetails } from "/src/Api.js";
import styles from "./MovieDetailsPage.module.css";

const MovieCast = lazy(() => import("/src/components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("/src/components/MovieReviews/MovieReviews")
);

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const previousLocationRef = useRef(location.state?.from || "/movies");

  useEffect(() => {
    fetchMovieDetails(movieId).then((data) => setMovie(data));
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className={styles.div}>
      <button
        onClick={() => navigate(previousLocationRef.current)}
        className={styles.GBBtn}
      >
        Go back
      </button>
      <div className={styles.movieDetails}>
        <img
          className={styles.poster}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className={styles.movieInfo}>
          <h1 className={styles.name}>
            {movie.title} ({new Date(movie.release_date).getFullYear()})
          </h1>
          <p>
            <strong>User Score:</strong> {Math.round(movie.vote_average * 10)}%
          </p>
          <h3>Overview</h3>
          <p className={styles.text}>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
        </div>
      </div>
      <div className={styles.additionalInfo}>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link
              to="cast"
              state={{ from: previousLocationRef.current }}
              className={styles.link}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              to="reviews"
              state={{ from: previousLocationRef.current }}
              className={styles.link}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default MovieDetailsPage;
