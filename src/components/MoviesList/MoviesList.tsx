import { useAppSelector } from "../../store/hooks";
import MovieCard from "../MovieCard/MovieCard";

const MoviesList = (): React.ReactElement => {
  const movies = useAppSelector((state) => {
    return state.moviesState.movies;
  });

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
};
export default MoviesList;
