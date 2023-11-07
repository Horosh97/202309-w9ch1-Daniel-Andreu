import { MovieStructure } from "../../store/features/movies/types";

interface MovieCardProps {
  movie: MovieStructure;
}

const MovieCard = ({
  movie: { title, image, director },
}: MovieCardProps): React.ReactElement => {
  return (
    <article>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <span>{director}</span>
    </article>
  );
};

export default MovieCard;
