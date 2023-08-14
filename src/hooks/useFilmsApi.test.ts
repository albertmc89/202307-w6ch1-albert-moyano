import { renderHook } from "@testing-library/react";
import { filmsMock } from "../mocks/films";
import useFilmsApi from "./useFilmsApi";

describe("Given a 'getFilms' function", () => {
  describe("When it is called", () => {
    test("Then it should return a list of films", async () => {
      const { result } = renderHook(() => useFilmsApi());

      const films = await result.current.getFilms();

      expect(films).toStrictEqual(filmsMock);
    });
  });
});
