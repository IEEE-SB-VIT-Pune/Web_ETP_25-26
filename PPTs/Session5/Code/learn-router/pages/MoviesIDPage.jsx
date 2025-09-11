import moviesData from "../data/moviesData";
import { Link, useParams } from "react-router-dom";

export default function MoviesIDPage() {
  const { id } = useParams();

  const movie = moviesData.find((m) => m.id === Number(id));

  return (
    <div className="movie-detail">
      <h1>{movie.title}</h1>
      <p>🎬 Genre: {movie.genre}</p>
      <p>🎥 Director: {movie.director}</p>
      <p>📅 Year: {movie.year}</p>
      <p>⭐ Rating: {movie.rating}</p>

      <Link to="/movies" className="btn">
        ← Back to Movies
      </Link>
    </div>
  );
}
