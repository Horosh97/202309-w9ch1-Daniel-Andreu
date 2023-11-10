import { useState } from "react";
import { MovieStructureWithoutId } from "../../store/features/movies/types";
import Button from "../Button/Button";
import MovieFormStyled from "./MovieFormStyled";

interface MovieFormProps {
  actionOnSubmit: (movie: MovieStructureWithoutId) => void;
}

const MovieForm = ({ actionOnSubmit }: MovieFormProps): React.ReactElement => {
  const initialNewMovie: MovieStructureWithoutId = {
    title: "",
    director: "",
    image: "",
    isWatched: false,
  };

  const [newMovie, setNewMovie] = useState(initialNewMovie);

  const onChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewMovie((newMovie: MovieStructureWithoutId) => ({
      ...newMovie,
      [event.target.id]: event.target.value,
    }));
  };

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    actionOnSubmit(newMovie);
  };

  const { title, director, image } = newMovie;

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
          value={title}
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
          value={director}
          onChange={onChangeData}
        />
      </div>
      <div className="movie-form__block">
        <label className="movie-form__label" htmlFor="image">
          Image URL:
        </label>
        <input
          id="image"
          className="movie-form__input"
          required
          type="text"
          value={image}
          onChange={onChangeData}
        />
      </div>
      <Button text="Add Movie" type="submit" />
    </MovieFormStyled>
  );
};
export default MovieForm;
