import { rest } from "msw";
import { coffeeEndpoint } from "../endpoint";

type Coffee = {
  title: string;
};

/**
 * コーヒーの銘柄を返却するAPIのmock: 1
 */
export const coffeeMock = rest.get(coffeeEndpoint, (_, response, context) =>
  response(
    context.delay(500),
    context.status(200),
    context.json([{ title: "mock_coffee: 1" }] as Coffee[])
  )
);

/**
 * コーヒーの銘柄を返却するAPIのmock: 2
 */
export const coffeeMock2 = rest.get(coffeeEndpoint, (_, response, context) =>
  response(
    context.delay(500),
    context.status(200),
    context.json([{ title: "mock_coffee: 2" }] as Coffee[])
  )
);
