import { useDispatch } from "react-redux";
import useMoviesApi from "../../hooks/useMoviesApi";
import { MovieStructure } from "../../store/features/movies/types";
import Button from "../Button/Button";
import MovieCardStyled from "./MovieCardStyled";
import { toggleWatchedMovieActionCreator } from "../../store/features/movies/moviesSlice";

interface MovieCardProps {
  movie: MovieStructure;
}

const MovieCard = ({
  movie: { id, title, image, director, isWatched },
}: MovieCardProps): React.ReactElement => {
  const { setWatchedMovies } = useMoviesApi();
  const dispatch = useDispatch();

  const toggleCardIsWatched = async (id: number): Promise<void> => {
    dispatch(toggleWatchedMovieActionCreator(id));
    await setWatchedMovies(id, isWatched);
  };
  return (
    <MovieCardStyled className="movie-container">
      <img
        className="movie-container__image"
        src={image}
        alt={title}
        width={380}
        height={500}
      />
      <h2 className="movie-container__title">{title}</h2>
      <span className="movie-container__director">{director}</span>
      <span className="movie-container__question">
        Have you watched this film?
      </span>
      <Button
        type="button"
        actionOnClick={() => {
          toggleCardIsWatched(id);
        }}
        className={`${isWatched ? "watched-class" : ""}`}
        text={`${isWatched ? "watched" : "unwatched"}`}
      />
    </MovieCardStyled>
  );
};

export default MovieCard;
