import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MovieStructure, MoviesStateStructure } from "./types";

const initialMoviesState: MoviesStateStructure = {
  movies: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState: initialMoviesState,
  reducers: {
    loadMovies: (
      currentState: MoviesStateStructure,
      action: PayloadAction<MovieStructure[]>,
    ): MoviesStateStructure => ({ ...currentState, movies: action.payload }),
    toggleWatchedMovie: (
      currentState: MoviesStateStructure,
      action: PayloadAction<number>,
    ): MoviesStateStructure => ({
      ...currentState,
      movies: currentState.movies.map((movie) => ({
        ...movie,
        isWatched:
          movie.id === action.payload ? !movie.isWatched : movie.isWatched,
      })),
    }),
    addMovie: (
      currentState: MoviesStateStructure,
      action: PayloadAction<MovieStructure>,
    ): MoviesStateStructure => ({
      ...currentState,
      movies: [...currentState.movies, action.payload],
    }),
  },
});

export const {
  loadMovies: loadMoviesActionCreator,
  toggleWatchedMovie: toggleWatchedMovieActionCreator,
  addMovie: addMovieActionCreator,
} = moviesSlice.actions;

export const moviesReducer = moviesSlice.reducer;
