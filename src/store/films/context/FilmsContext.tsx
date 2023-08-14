import { createContext } from "react";

const FilmsContext = createContext<FilmsContextStructure>(
  {} as FilmsContextStructure,
);

export default FilmsContext;
