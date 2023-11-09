import moviesMock from "../../mocks/moviesMock";
import MoviesList from "./MoviesList";
import { screen } from "@testing-library/react";
import renderWithProviders from "../../test-utils/renderWithProviders";

describe("Given a MoviesList component", () => {
  describe("When it receives an array of movies with 'The exorcist' and 'Texas Chain Saw Massacre'", () => {
    test("Then it should create 2 MovieCards", () => {
      const expectedListItems = 2;
      const movies = moviesMock;

      renderWithProviders(<MoviesList />, movies);
      const listItems = screen.getAllByRole("listitem").length;

      expect(listItems).toBe(expectedListItems);
    });
  });
});
