import { render, screen } from "@testing-library/react";
import { describe, expect, it, Mock, vi } from "vitest";

import "@testing-library/jest-dom/vitest";
import ChatMessagesWrapper from ".";
import { useChatContext } from "../../../hooks/useChatContext";

vi.mock("../../../hooks/useChatContext");

describe("MessagesWrapper", () => {
  it("should render the loading state", () => {
    (useChatContext as Mock).mockReturnValue({
      isLoading: true,
      messages: [],
      isBotTyping: false,
    });

    const { container } = render(<ChatMessagesWrapper />);
    const loader = container.querySelector("#chat-loader");

    expect(loader).toBeInTheDocument();
  });

  it("should render with messages", () => {
    (useChatContext as Mock).mockReturnValue({
      isLoading: false,
      messages: [
        { from: "user", message: "Olá", date: new Date().toISOString() },
        {
          from: "bot",
          message: "Oi! Como posso te ajudar?",
          date: new Date().toISOString(),
        },
      ],
      isBotTyping: false,
    });

    render(<ChatMessagesWrapper />);

    expect(screen.getByText("Olá")).toBeInTheDocument();
    expect(screen.getByText("Oi! Como posso te ajudar?")).toBeInTheDocument();
  });

  it("shound render if bot is typing", () => {
    (useChatContext as Mock).mockReturnValue({
      isLoading: false,
      messages: [],
      isBotTyping: true,
    });

    render(<ChatMessagesWrapper />);

    expect(screen.getByText("Digitando")).toBeInTheDocument();
  });
});
