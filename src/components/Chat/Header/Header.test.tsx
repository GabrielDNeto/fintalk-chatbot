import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import ChatHeader from ".";
import { APP_ROUTES } from "../../../config/routes";

describe("Chat Header", () => {
  it("should render the chat header", () => {
    render(
      <MemoryRouter initialEntries={[APP_ROUTES.chat]}>
        <ChatHeader />
      </MemoryRouter>,
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: /bot-name/i }),
    ).toBeInTheDocument();
  });

  it("should change the chatbot name", async () => {
    const input = screen.getByRole("textbox", { name: /bot-name/i });

    expect(input).toHaveValue("Chatbot");

    const user = userEvent.setup();
    await user.dblClick(input);
    await user.clear(input);
    await user.type(input, "Fintalk");
    await user.keyboard("{enter}");

    expect(input).toHaveValue("Fintalk");
    expect(localStorage.getItem("chatbotName")).toBe("Fintalk");
  });
});
