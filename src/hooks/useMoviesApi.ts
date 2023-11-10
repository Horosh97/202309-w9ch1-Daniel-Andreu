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

  const addNewMovie = async (
    movie: MovieStructure,
  ): Promise<MovieStructure> => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, ...movieWithoutId } = movie;
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movieWithoutId),
      });
      if (!response.ok) {
        throw new Error();
      }
      const returnedMovieFromApi = (await response.json()) as MovieStructure;
      return returnedMovieFromApi;
    } catch (error) {
      console.log((error as Error).message);
      const returnedMovieFromApi = {} as MovieStructure;
      return returnedMovieFromApi;
    }
  };

  return {
    getMovies,
    setWatchedMovies,
    addNewMovie,
  };
};

export default useMoviesApi;
