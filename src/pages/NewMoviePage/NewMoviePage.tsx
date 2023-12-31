import { useDispatch } from "react-redux";
import MovieForm from "../../components/MovieForm/MovieForm";
import NewMoviePageStyled from "./NewMoviePageStyled";
import {
  MovieStructure,
  MovieStructureWithoutId,
} from "../../store/features/movies/types";
import { addMovieActionCreator } from "../../store/features/movies/moviesSlice";
import { useNavigate } from "react-router-dom";
import useMoviesApi from "../../hooks/useMoviesApi";
import Button from "../../components/Button/Button";

const NewMoviePage = (): React.ReactElement => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { addNewMovie } = useMoviesApi();

  const addMovieOnSubmit = async (newMovie: MovieStructureWithoutId) => {
    try {
      const returnedMovieFromApi: MovieStructure = await addNewMovie(newMovie);
      dispatch(addMovieActionCreator(returnedMovieFromApi));
      navigate("/films");
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return (
    <NewMoviePageStyled className="new-page">
      <h1 className="new-page__title">Add an horrorific film:</h1>
      <Button
        className="new-page__button"
        text="Return to Films"
        type="button"
        actionOnClick={() => navigate("/films")}
      />
      <main className="new-page__main">
        <MovieForm actionOnSubmit={addMovieOnSubmit} />
      </main>
    </NewMoviePageStyled>
  );
};
export default NewMoviePage;
