import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { filmsMock } from "../../mocks/films";
import FilmsListPage from "../../pages/FilmsListPage/FilmsListPage";
import FilmsContextProvider from "../../store/films/context/FilmsContextProvider";

describe("Given a Count component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 'Listando 4 películas", async () => {
      const numberOfFilms = filmsMock.length;
      const countText = `Listando ${numberOfFilms} películas`;

      render(
        <FilmsContextProvider>
          <BrowserRouter>
            <FilmsListPage />
          </BrowserRouter>
        </FilmsContextProvider>,
      );

      const spanElement = await waitFor(() => screen.getByLabelText(countText));

      expect(spanElement).toBeInTheDocument();
      expect(spanElement).toHaveTextContent("Listando 4 películas");
    });
  });
});
