export interface MovieStructure {
  id: number;
  title: string;
  director: string;
  image: string;
}

export interface MoviesStateStructure {
  movies: MovieStructure[];
}
