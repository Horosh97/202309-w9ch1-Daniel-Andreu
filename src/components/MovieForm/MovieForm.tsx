import Button from "../Button/Button";
import MovieFormStyled from "./MovieFormStyled";

const MovieForm = (): React.ReactElement => {
  return (
    <MovieFormStyled className="movie-form">
      <div className="movie-form__block">
        <label className="movie-form__label" htmlFor="title">
          Title:
        </label>
        <input id="title" className="movie-form__input" required type="text" />
      </div>
      <div className="movie-form__block">
        <label className="movie-form__label" htmlFor="director">
          Director:
        </label>
        <input
          id="director"
          className="movie-form__input"
          required
          type="text"
        />
      </div>
      <div className="movie-form__block">
        <label className="movie-form__label" htmlFor="imgUrl">
          Image URL:
        </label>
        <input id="imgUrl" className="movie-form__input" required type="text" />
      </div>
      <Button text="Add Movie" />
    </MovieFormStyled>
  );
};
export default MovieForm;
