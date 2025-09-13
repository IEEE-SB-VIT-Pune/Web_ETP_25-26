import { Link, useSearchParams } from "react-router-dom";
import moviesData from "../data/moviesData";

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sort");

  let movieList = [...moviesData];
  if (sortBy === "rating") {
    movieList.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === "year") {
    movieList.sort((a, b) => b.year - a.year);
  }

  const dispayMovies = movieList.map((movie) => (
    <li key={movie.id} className="movie-card">
      <Link to={`/movies/${movie.id}`}>
        <h3>
          {movie.title} ({movie.year})
        </h3>
      </Link>
      <p>
        {movie.genre} | Rating: {movie.rating}
      </p>
    </li>
  ));

  return (
    <div>
      <h1>All Movies</h1>
      <button onClick={() => setSearchParams({ sort: "rating" })}>
        Sort by Rating
      </button>
      <button onClick={() => setSearchParams({ sort: "year" })}>
        Sort by Year
      </button>
      <ul className="movies-list">{dispayMovies}</ul>
    </div>
  );
}
