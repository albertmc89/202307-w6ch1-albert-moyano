import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import useFilmsApi from "../../../hooks/useFilmsApi";
import { Film } from "../../../types";
import FilmsContext from "./FilmsContext";
import { FilmsContextStructure } from "./types";

const FilmsContextProvider = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  const [films, setFilms] = useState<Film[]>([]);

  const { getFilms, addFilm: addFilmToOrigin } = useFilmsApi();

  const loadFilms = useCallback(async () => {
    const originFilms = await getFilms();

    setFilms([...originFilms]);
  }, [getFilms]);

  const addFilm = useCallback(
    async (film: Film) => {
      const newFilm = await addFilmToOrigin(film);

      setFilms((films) => [...films, newFilm]);
    },
    [addFilmToOrigin],
  );

  const filmsContextValue = useMemo(
    (): FilmsContextStructure => ({
      films,
      loadFilms,
      addFilm,
    }),
    [films, loadFilms, addFilm],
  );
  return (
    <FilmsContext.Provider value={filmsContextValue}>
      {children}
    </FilmsContext.Provider>
  );
};

export default FilmsContextProvider;
