import { useCallback } from "react";
import { Film } from "../types";

const useFilmsApi = () => {
  const apiUrl = import.meta.env.VITE_API_FILMS_URL;

  const getFilms = useCallback(async () => {
    try {
      const response = await fetch(apiUrl);
      const apiFilms = (await response.json()) as Film[];

      return apiFilms;
    } catch {
      throw new Error("Films couldn't be loaded");
    }
  }, [apiUrl]);

  const addFilm = async (film: Film) => {
    const response = await fetch(apiUrl, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(film),
    });
    const newFilm = (await response.json()) as Film;

    return newFilm;
  };

  return { getFilms, addFilm };
};

export default useFilmsApi;
