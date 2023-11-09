import { useDispatch } from "react-redux";
import useMoviesApi from "../../hooks/useMoviesApi";
import { MovieStructure } from "../../store/features/movies/types";
import Button from "../Button/Button";
import MovieCardStyled from "./MovieCardStyled";
import { toggleWatchedMoviesActionCreator } from "../../store/features/movies/moviesSlice";

interface MovieCardProps {
  movie: MovieStructure;
}

const MovieCard = ({
  movie: { id, title, image, director, isWatched },
}: MovieCardProps): React.ReactElement => {
  const { setWatchedMovies } = useMoviesApi();
  const dispatch = useDispatch();

  const toggleCardIsWatched = async (id: number): Promise<void> => {
    dispatch(toggleWatchedMoviesActionCreator(id));
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
      <Button
        title="isWatched-button"
        actionOnClick={() => {
          toggleCardIsWatched(id);
        }}
        text={`${isWatched ? "watched" : "unwatched"}`}
      />
    </MovieCardStyled>
  );
};

export default MovieCard;
