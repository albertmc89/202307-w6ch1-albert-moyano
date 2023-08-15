import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";

describe("Given a Navigation component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the links 'Home' and 'Create Character'", () => {
      const navList = "Listado de películas";
      const navAdd = "Añadir película";

      render(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>,
      );

      const navLinkList = screen.getByRole("link", { name: navList });
      const navLinkAdd = screen.getByRole("link", { name: navAdd });

      expect(navLinkList).toBeInTheDocument();
      expect(navLinkAdd).toBeInTheDocument();
    });
  });
});
