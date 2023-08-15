import { useState } from "react";
import Button from "../Button/Button";
import "./NewFilm.css";

const NewFilm = (): React.ReactElement => {
  const initialFilmData = {
    title: "",
    director: "",
    poster: "",
    year: 0,
  };

  const [newFilm, setNewFilm] = useState(initialFilmData);
  const { title, director, poster, year } = newFilm;

  const changeNewFilm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewFilm((newFilm) => ({
      ...newFilm,
      [event.target.id]: event.target.value,
    }));

    validationCheck();
  };

  const [disabled, setDisabled] = useState(true);

  const validationCheck = () => {
    if (title !== "" && director !== "" && poster !== "" && year !== 0) {
      return setDisabled(false);
    }

    return setDisabled(true);
  };

  return (
    <form className="form-film">
      <div className="form-control">
        <label htmlFor="title">Título: </label>
        <input type="text" id="title" value={title} onChange={changeNewFilm} />
      </div>
      <div className="form-control">
        <label htmlFor="director">Dirección: </label>
        <input
          type="text"
          id="director"
          value={director}
          onChange={changeNewFilm}
        />
      </div>
      <div className="form-control">
        <label htmlFor="year">Año: </label>
        <input type="number" id="year" value={year} onChange={changeNewFilm} />
      </div>
      <div className="form-control">
        <label htmlFor="poster">URL cartel: </label>
        <input type="url" id="poster" value={poster} onChange={changeNewFilm} />
      </div>
      <div className="form-control">
        <Button disabled={disabled}>Crear película</Button>
      </div>
    </form>
  );
};

export default NewFilm;
