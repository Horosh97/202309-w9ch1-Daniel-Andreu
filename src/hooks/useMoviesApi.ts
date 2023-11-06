import { useCallback } from "react";
import { MovieStructure } from "../store/features/movies/types";

const apiUrl = "https://api-movies-pt6h.onrender.com/items";

const useMoviesApi = () => {
  const getMovies = useCallback(async () => {
    const response = await fetch(apiUrl);
    const movies = (await response.json()) as MovieStructure[];

    return movies;
  }, []);

  return {
    getMovies,
  };
};

export default useMoviesApi;
