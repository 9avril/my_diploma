import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import RoutersTable from "../components/tables/RoutersTable";
import "jest-canvas-mock";

const server = setupServer(
  rest.get("http://localhost:3001/routers", (req, res, ctx) => {
    return res(ctx.json([{ id: 1, name: "Router 1" }]));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("renders RoutersTable without errors and fetches routers data", async () => {
  render(<RoutersTable />);

  const routerData = await screen.findByText("Router 1");

  // Проверить, что данные роутера отображаются на странице
  expect(routerData).toBeInTheDocument();
});
