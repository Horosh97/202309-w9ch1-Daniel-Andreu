import { configureStore } from "@reduxjs/toolkit";
import moviesMock from "../../mocks/moviesMock";
import { moviesReducer } from "../../store/features/movies/moviesSlice";
import { Provider } from "react-redux";
import MoviesList from "./MoviesList";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "../../styles/mainTheme";

describe("Given a MoviesList component", () => {
  describe("When it receives an array of movies with 'The exorcist' and 'Texas Chain Saw Massacre'", () => {
    test("Then it should create 2 MovieCards, one of 'The exorcist' and one of 'Texas Chain Saw Massacre'", () => {
      const expectedListItems = 2;
      const movies = moviesMock;
      const mockStore = configureStore({
        reducer: {
          moviesState: moviesReducer,
        },
        preloadedState: { moviesState: { movies: movies } },
      });

      render(
        <Provider store={mockStore}>
          <ThemeProvider theme={mainTheme}>
            <MoviesList />
          </ThemeProvider>
        </Provider>,
      );

      const listItems = screen.getAllByRole("listitem").length;

      expect(listItems).toBe(expectedListItems);
    });
  });
});
