import { useAppSelector } from "../../store/hooks";

const MoviesList = (): React.ReactElement => {
  const movies = useAppSelector((state) => {
    return state.moviesState.movies;
  });

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <div />
        </li>
      ))}
    </ul>
  );
};
export default MoviesList;
