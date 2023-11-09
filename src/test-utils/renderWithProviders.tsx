import { configureStore } from "@reduxjs/toolkit";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "../styles/mainTheme";
import { render } from "@testing-library/react";
import { moviesReducer } from "../store/features/movies/moviesSlice";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { MovieStructure } from "../store/features/movies/types";

const renderWithProviders = (
  children: React.ReactElement,
  mocksList: MovieStructure[],
) => {
  const mockStore = configureStore({
    reducer: {
      moviesState: moviesReducer,
    },
    preloadedState: { moviesState: { movies: mocksList } },
  });

  render(
    <BrowserRouter>
      <Provider store={mockStore}>
        <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
      </Provider>
    </BrowserRouter>,
  );
};
export default renderWithProviders;
