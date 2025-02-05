import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import ChatSendBox from ".";
import { APP_ROUTES } from "../../../config/routes";
import { ChatContextProvider } from "../../../contexts/Chat";

import "@testing-library/jest-dom/vitest";
import userEvent from "@testing-library/user-event";

describe("Sendbox", () => {
  it("should render", () => {
    render(
      <MemoryRouter initialEntries={[APP_ROUTES.chat]}>
        <ChatContextProvider>
          <ChatSendBox />
        </ChatContextProvider>
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("textbox", { name: /message-input/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /send-message/i }),
    ).toBeInTheDocument();
  });

  it("should send message", async () => {
    const input = screen.getByRole("textbox", { name: /message-input/i });
    const btn = screen.getByRole("button", { name: /send-message/i });

    const user = userEvent.setup();

    await user.type(input, "Test");
    expect(input).toHaveValue("Test");
    await user.click(btn);
    expect(input).toHaveValue("");

    await user.type(input, "Test");
    expect(input).toHaveValue("Test");
    await user.keyboard("{enter}");
    expect(input).toHaveValue("");
  });
});
