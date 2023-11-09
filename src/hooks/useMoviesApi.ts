import { useCallback } from "react";
import { MovieStructure } from "../store/features/movies/types";

const apiUrl = import.meta.env.VITE_API_URL;

const useMoviesApi = () => {
  const getMovies = useCallback(async () => {
    const response = await fetch(apiUrl);
    const movies = (await response.json()) as MovieStructure[];

    return movies;
  }, []);

  const setWatchedMovies = useCallback(
    async (movieId: number, isWatched: boolean): Promise<void> => {
      try {
        const response = await fetch(`${apiUrl}/${movieId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ isWatched: !isWatched }),
        });

        if (!response.ok) {
          throw new Error();
        }
      } catch {
        throw new Error();
      }
    },
    [],
  );

  return {
    getMovies,
    setWatchedMovies,
  };
};

export default useMoviesApi;
