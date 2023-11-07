import { useEffect } from "react";
import MoviesList from "../components/MoviesList/MoviesList";
import { useAppDispatch } from "../store/hooks";
import useMoviesApi from "../hooks/useMoviesApi";
import { loadMoviesActionCreator } from "../store/features/movies/moviesSlice";

const HomePage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getMovies } = useMoviesApi();

  useEffect(() => {
    (async () => {
      const actualMovies = await getMovies();
      dispatch(loadMoviesActionCreator(actualMovies));
    })();
  }, [dispatch, getMovies]);

  return (
    <main>
      <MoviesList />
    </main>
  );
};
export default HomePage;
