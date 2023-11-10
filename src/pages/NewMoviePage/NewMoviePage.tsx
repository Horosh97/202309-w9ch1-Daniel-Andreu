import { useDispatch } from "react-redux";
import MovieForm from "../../components/MovieForm/MovieForm";
import NewMoviePageStyled from "./NewMoviePageStyled";
import { MovieStructure } from "../../store/features/movies/types";
import { addMovieActionCreator } from "../../store/features/movies/moviesSlice";
import { useNavigate } from "react-router-dom";
import useMoviesApi from "../../hooks/useMoviesApi";

const NewMoviePage = (): React.ReactElement => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { addNewMovie } = useMoviesApi();

  const addMovieOnSubmit = async (newMovie: MovieStructure) => {
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
      <main>
        <MovieForm actionOnSubmit={addMovieOnSubmit} />
      </main>
    </NewMoviePageStyled>
  );
};
export default NewMoviePage;
