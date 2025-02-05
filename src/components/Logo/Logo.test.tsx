import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import Logo from ".";

import "@testing-library/jest-dom/vitest";

describe("Logo", () => {
  it("should render the logo", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Logo />
      </MemoryRouter>,
    );

    expect(screen.getByAltText("Fintalk")).toBeInTheDocument();
  });

  it("should render the logo with homepage link", () => {
    expect(screen.getByRole("link")).toBeInTheDocument();
  });
});
