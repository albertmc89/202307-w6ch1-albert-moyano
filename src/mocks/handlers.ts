import { rest } from "msw";
import { filmsMock } from "./films";

export const handlers = [
  rest.get(import.meta.env.VITE_API_FILMS_URL, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(filmsMock));
  }),
];
