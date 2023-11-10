export interface MovieStructure {
  id: number;
  title: string;
  director: string;
  image: string;
  isWatched: boolean;
}

export interface MoviesStateStructure {
  movies: MovieStructure[];
}
