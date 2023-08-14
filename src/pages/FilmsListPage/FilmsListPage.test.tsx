import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FilmsContextProvider from "../../store/films/context/FilmsContextProvider";
import FilmsListPage from "./FilmsListPage";

describe("Given an FilmsListPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 'Listado de peliculas' inside a heading", () => {
      const title = "Listado de películas";

      render(
        <FilmsContextProvider>
          <BrowserRouter>
            <FilmsListPage />
          </BrowserRouter>
        </FilmsContextProvider>,
      );

      const headingTitle = screen.getByRole("heading", { name: title });

      expect(headingTitle).toBeInTheDocument();
    });
  });
});
