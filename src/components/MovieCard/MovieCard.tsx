import { MovieStructure } from "../../store/features/movies/types";
import MovieCardStyled from "./MovieCardStyled";

interface MovieCardProps {
  movie: MovieStructure;
}

const MovieCard = ({
  movie: { title, image, director },
}: MovieCardProps): React.ReactElement => {
  return (
    <MovieCardStyled>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <span>{director}</span>
    </MovieCardStyled>
  );
};

export default MovieCard;
