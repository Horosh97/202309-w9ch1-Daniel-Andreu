export interface MovieStructureWithoutId {
  title: string;
  director: string;
  image: string;
  isWatched: boolean;
}

export interface MovieStructure extends MovieStructureWithoutId {
  id: number;
}
export interface MoviesStateStructure {
  movies: MovieStructure[];
}
