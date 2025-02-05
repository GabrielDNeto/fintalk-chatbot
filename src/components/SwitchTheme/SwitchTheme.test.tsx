import { describe, it, expect } from "vitest";

import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { APP_ROUTES } from "../../config/routes";
import SwitchTheme from ".";
import { userEvent } from "@testing-library/user-event";

describe("SwitchTheme", () => {
  it("should render", async () => {
    render(
      <MemoryRouter initialEntries={[APP_ROUTES.home]}>
        <SwitchTheme />
      </MemoryRouter>,
    );

    const themeSwitcher = screen.getByRole("checkbox", {
      name: /theme-switch/i,
    });

    expect(themeSwitcher).toBeInTheDocument();

    const user = userEvent.setup();

    await user.click(themeSwitcher);
    expect(document.documentElement.classList.contains("dark")).toBe(true);

    await user.click(themeSwitcher);
    expect(document.documentElement.classList.contains("dark")).toBe(false);
  });
});
