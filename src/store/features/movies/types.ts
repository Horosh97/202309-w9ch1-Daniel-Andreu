export interface movieStructure {
  id: number;
  title: string;
  director: string;
  image: string;
}

export interface moviesStateStructure {
  movies: movieStructure[];
}
