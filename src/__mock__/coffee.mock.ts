import { rest } from "msw";
import { coffeeEndpoint } from "../endpoint";

type Coffee = {
  title: string;
};

/**
 * コーヒーの銘柄を返却するAPIのmock
 */
export const coffeeMock = rest.get(coffeeEndpoint, (_, response, context) =>
  response(
    context.delay(500),
    context.status(200),
    context.json([
      { title: "mock coffee 1" },
      { title: "mock coffee 2" },
      { title: "mock coffee 3" },
    ] as Coffee[])
  )
);
