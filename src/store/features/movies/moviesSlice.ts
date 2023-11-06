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
      currentState,
      action: PayloadAction<MovieStructure[]>,
    ): MoviesStateStructure => {
      return {
        ...currentState,
        movies: action.payload,
      };
    },
  },
});

export const { loadMovies: loadMoviesActionCreator } = moviesSlice.actions;

export const moviesReducer = moviesSlice.reducer;
