import { render, screen } from "@testing-library/react";
import { filmsMock } from "../../mocks/films";
import FilmCard from "./FilmCard";

describe("Given a FilmsCard component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 'Viaje a Darjeeling (2007)' as heading", () => {
      const expectedHeadingText = "Viaje a Darjeeling (2007)";

      render(<FilmCard film={filmsMock[0]} />);

      const textHeading = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(textHeading).toBeInTheDocument();
    });
  });
});
