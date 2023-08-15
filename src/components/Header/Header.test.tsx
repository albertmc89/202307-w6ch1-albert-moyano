import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When is rendered", () => {
    test("Then it should show the title 'Películas'", () => {
      const titleText = "Películas";

      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
      );

      const title = screen.getByRole("heading", {
        name: titleText,
      });

      expect(title).toBeInTheDocument();
    });
  });
});
