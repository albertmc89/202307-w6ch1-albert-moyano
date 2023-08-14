import { useCallback } from "react";
import { Film } from "../types";

const useFilmsApi = () => {
  const apiUrl = import.meta.env.VITE_API_FILMS_URL;

  const getFilms = useCallback(async () => {
    const response = await fetch(apiUrl);
    const apiFilms = (await response.json()) as Film[];

    return apiFilms;
  }, [apiUrl]);

  return { getFilms };
};

export default useFilmsApi;
