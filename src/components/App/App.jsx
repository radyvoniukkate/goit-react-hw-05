import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "/src/components/Navigation/Navigation";

const HomePage = lazy(() => import("/src/pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("/src/pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() => import("/src/pages/MovieDetailsPage/MovieDetailsPage"));
const NotFoundPage = lazy(() => import("/src/pages/NotFoundPage/NotFoundPage"));

function App() {
  return (
    <Router >
      <Navigation />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
