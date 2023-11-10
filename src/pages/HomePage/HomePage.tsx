import { useEffect } from "react";
import MoviesList from "../../components/MoviesList/MoviesList";
import { useAppDispatch } from "../../store/hooks";
import useMoviesApi from "../../hooks/useMoviesApi";
import { loadMoviesActionCreator } from "../../store/features/movies/moviesSlice";
import HomePageStyled from "./HomePageStyled";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

const HomePage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getMovies } = useMoviesApi();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const actualMovies = await getMovies();
      dispatch(loadMoviesActionCreator(actualMovies));
    })();
  }, [dispatch, getMovies]);

  return (
    <HomePageStyled className="home-page">
      <h1 className="home-page__title">Horror Films</h1>
      <h2 className="home-page__subtitle">
        The best horrorific movies of all time
      </h2>
      <Button
        className="home-page__button"
        text="Add a new movie"
        type="button"
        actionOnClick={() => navigate("/new")}
      />
      <main>
        <MoviesList />
      </main>
    </HomePageStyled>
  );
};
export default HomePage;
