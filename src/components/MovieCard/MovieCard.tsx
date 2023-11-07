import { MovieStructure } from "../../store/features/movies/types";
import MovieCardStyled from "./MovieCardStyled";

interface MovieCardProps {
  movie: MovieStructure;
}

const MovieCard = ({
  movie: { title, image, director },
}: MovieCardProps): React.ReactElement => {
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
    </MovieCardStyled>
  );
};

export default MovieCard;
