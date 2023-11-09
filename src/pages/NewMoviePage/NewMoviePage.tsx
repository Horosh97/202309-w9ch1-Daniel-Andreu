import MovieForm from "../../components/MovieForm/MovieForm";
import NewMoviePageStyled from "./NewMoviePageStyled";

const NewMoviePage = (): React.ReactElement => {
  return (
    <NewMoviePageStyled className="new-page">
      <h1 className="new-page__title">Add an horrorific film:</h1>
      <main>
        <MovieForm />
      </main>
    </NewMoviePageStyled>
  );
};
export default NewMoviePage;
