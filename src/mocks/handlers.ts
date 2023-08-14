import { rest } from "msw";

export const handlers = [
  rest.get(
    `${import.meta.env.VITE_API_FILMS_URL}/characters`,
    (_req, res, ctx) => {
      return res(ctx.status(200), ctx.json(""));
    },
  ),
];
