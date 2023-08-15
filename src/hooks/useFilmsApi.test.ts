import { renderHook } from "@testing-library/react";
import { filmsMock, newFilmMock } from "../mocks/films";
import { handlersError, postHandlers } from "../mocks/handlers";
import { server } from "../mocks/server";
import useFilmsApi from "./useFilmsApi";

describe("Given a 'getFilms' function", () => {
  describe("When it is called", () => {
    test("Then it should return a list of films", async () => {
      const { result } = renderHook(() => useFilmsApi());

      const films = await result.current.getFilms();

      expect(films).toStrictEqual(filmsMock);
    });

    test("Then it should throw an error when the request fails to get the film collection from the Api rest", async () => {
      server.resetHandlers(...handlersError);
      const expectedError = new Error("Films couldn't be loaded");

      const { result } = renderHook(() => useFilmsApi());

      const { getFilms } = result.current;

      const error = getFilms();

      expect(error).rejects.toThrowError(expectedError);
    });

    test("Then it should create a new film and add to list of films", async () => {
      server.resetHandlers(...postHandlers);
      const { result } = renderHook(() => useFilmsApi());

      const createdFilm = await result.current.addFilm(newFilmMock);

      expect(createdFilm).toStrictEqual(newFilmMock);
    });
  });
});
