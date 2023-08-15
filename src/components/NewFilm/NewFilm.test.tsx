import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewFilm from "./NewFilm";

describe("Given a NewFilm component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a 'title', 'poster', 'director', 'year' fields", () => {
      const titleInputLabelText = "Título:";
      const directorInputLabelText = "Dirección:";
      const posterInputLabelText = "URL cartel:";
      const yearInputLabelText = "Año:";

      render(<NewFilm />);

      const titleInput = screen.getByLabelText(
        titleInputLabelText,
      ) as HTMLInputElement;
      const directorInput = screen.getByLabelText(
        directorInputLabelText,
      ) as HTMLInputElement;
      const posterInput = screen.getByLabelText(
        posterInputLabelText,
      ) as HTMLInputElement;
      const yearInput = screen.getByLabelText(
        yearInputLabelText,
      ) as HTMLInputElement;

      expect(titleInput).toBeInTheDocument();
      expect(directorInput).toBeInTheDocument();
      expect(posterInput).toBeInTheDocument();
      expect(yearInput).toBeInTheDocument();
    });
  });

  describe("When any of the inputs are empty", () => {
    test("Then it should show a disabled button", () => {
      render(<NewFilm />);

      const button = screen.getByRole("button", { name: "Crear película" });

      expect(button).toBeDisabled();
    });
  });

  describe("When user writes 'Viaje a Darjeeling', 'Wes Anderson', 2007, 'https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/67/28/56/20350733.jpg'", () => {
    test("Then it should show 'Viaje a Darjeeling', 'Wes Anderson', 2007, 'https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/67/28/56/20350733.jpg'", async () => {
      const titleText = "Viaje a Darjeeling";
      const directorText = "Wes Anderson";
      const yearText = 2007;
      const posterText =
        "https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/67/28/56/20350733.jpg";

      render(<NewFilm />);

      const title = screen.getByRole("textbox", {
        name: /título:/i,
      }) as HTMLInputElement;
      const direction = screen.getByRole("textbox", {
        name: /dirección/i,
      }) as HTMLInputElement;
      const year = screen.getByRole("spinbutton", {
        name: /año/i,
      }) as HTMLInputElement;
      const url = screen.getByRole("textbox", {
        name: /url cartel/i,
      }) as HTMLInputElement;

      await userEvent.type(title, titleText);
      await userEvent.type(direction, directorText);
      await userEvent.type(year, yearText.toString());
      await userEvent.type(url, posterText);

      expect(title.value).toBe(titleText);
      expect(direction.value).toBe(directorText);
      expect(year.value).toBe(yearText.toString());
      expect(url.value).toBe(posterText);
    });
  });
});
