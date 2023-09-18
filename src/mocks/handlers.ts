import { rest } from "msw";

export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: "Mahesh Zilpe",
        },
        {
          name: "Kalyani Zilpe",
        },
        {
          name: "Jayashri Zilpe",
        },
      ]),
    );
  }),
];
