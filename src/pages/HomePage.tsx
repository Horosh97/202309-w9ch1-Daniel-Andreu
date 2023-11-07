import { useEffect } from "react";
import MoviesList from "../components/MoviesList/MoviesList";
import { useAppDispatch } from "../store/hooks";
import useMoviesApi from "../hooks/useMoviesApi";
import { loadMoviesActionCreator } from "../store/features/movies/moviesSlice";
import HomePageStyled from "./HomePageStyled";

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
    <HomePageStyled className="home-page">
      <h1 className="home-page__title">Top 8 Horror Films</h1>
      <main>
        <MoviesList />
      </main>
    </HomePageStyled>
  );
};
export default HomePage;
