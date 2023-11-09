import { useState } from "react";
import { MovieStructure } from "../../store/features/movies/types";
import Button from "../Button/Button";
import MovieFormStyled from "./MovieFormStyled";

interface MovieFormProps {
  actionOnSubmit: (movie: MovieStructure) => void;
}

const MovieForm = ({ actionOnSubmit }: MovieFormProps): React.ReactElement => {
  const initialNewMovie: MovieStructure = {
    id: 0,
    title: "",
    director: "",
    image: "",
    isWatched: false,
  };

  const [newMovie, setNewMovie] = useState(initialNewMovie);

  const onChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewMovie((newMovie: MovieStructure) => ({
      ...newMovie,
      [event.target.id]: event.target.value,
    }));
  };

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    actionOnSubmit(newMovie);

    setNewMovie(initialNewMovie);
  };

  return (
    <MovieFormStyled
      className="movie-form"
      autoComplete="off"
      onSubmit={onFormSubmit}
    >
      <div className="movie-form__block">
        <label className="movie-form__label" htmlFor="title">
          Title:
        </label>
        <input
          id="title"
          className="movie-form__input"
          required
          type="text"
          onChange={onChangeData}
        />
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
          onChange={onChangeData}
        />
      </div>
      <div className="movie-form__block">
        <label className="movie-form__label" htmlFor="imgUrl">
          Image URL:
        </label>
        <input
          id="imgUrl"
          className="movie-form__input"
          required
          type="text"
          onChange={onChangeData}
        />
      </div>
      <Button text="Add Movie" />
    </MovieFormStyled>
  );
};
export default MovieForm;
