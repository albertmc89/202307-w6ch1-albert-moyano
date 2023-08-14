import { Film } from "../types";

const useFilmsApi = async () => {
  const apiUrl = import.meta.env.VITE_API_FILMS_URL;

  const response = await fetch(`${apiUrl}`);
  const apiFilms = (await response.json()) as Film[];

  return apiFilms;
};

export default useFilmsApi;
