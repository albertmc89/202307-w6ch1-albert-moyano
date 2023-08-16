import { rest } from "msw";
import { filmsMock, newFilmMock } from "./films";

export const handlers = [
  rest.get(import.meta.env.VITE_API_FILMS_URL, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(filmsMock));
  }),
  rest.post(import.meta.env.VITE_API_FILMS_URL, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(newFilmMock));
  }),
];

export const handlersError = [
  rest.get(import.meta.env.VITE_API_FILMS_URL, (_req, res, ctx) => {
    return res(ctx.status(404, "Films couldn't be loaded"));
  }),
  rest.post(import.meta.env.VITE_API_FILMS_URL, (_req, res, ctx) => {
    return res(ctx.status(404, "Films couldn't be created"));
  }),
];
