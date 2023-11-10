import { useDispatch } from "react-redux";
import MovieForm from "../../components/MovieForm/MovieForm";
import NewMoviePageStyled from "./NewMoviePageStyled";
import { MovieStructure } from "../../store/features/movies/types";
import { addMovieActionCreator } from "../../store/features/movies/moviesSlice";
import { useNavigate } from "react-router-dom";

const NewMoviePage = (): React.ReactElement => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addMovieOnSubmit = (newMovie: MovieStructure) => {
    dispatch(addMovieActionCreator(newMovie));
    navigate("/films");
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
