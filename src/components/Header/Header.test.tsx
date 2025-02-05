import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import { APP_ROUTES } from "../../config/routes";
import Header from ".";

import "@testing-library/jest-dom/vitest";

describe("Header", () => {
  it("should render", () => {
    render(
      <MemoryRouter initialEntries={[APP_ROUTES.home]}>
        <Header />
      </MemoryRouter>,
    );

    expect(screen.getByAltText("Fintalk")).toBeInTheDocument();
    expect(
      screen.getByRole("checkbox", { name: /theme-switch/i }),
    ).toBeInTheDocument();
  });
});
