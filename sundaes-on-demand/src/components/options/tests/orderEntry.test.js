import { screen, render, waitFor } from "@testing-library/react";
import OrderEntry from "./../OrderEntry";
import { rest } from "msw";
import { server } from "./../../../mocks/server";

describe("order Entry tests", () => {
  test("Error cases", async () => {
    server.resetHandlers(
      rest.get("http://localhost:3030/scoops", (req, res, ctx) => {
        return res(ctx.status(500));
      }),
      rest.get("http://localhost:3030/toppings", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    render(<OrderEntry></OrderEntry>);
    await waitFor(async () => {
      const alerts = await screen.findAllByRole("alert");
      expect(alerts).toHaveLength(2);
    });
  });
});
