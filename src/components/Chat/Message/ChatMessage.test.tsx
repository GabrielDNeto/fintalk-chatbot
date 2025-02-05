import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import ChatMessage from ".";
import { APP_ROUTES } from "../../../config/routes";
import dayjs from "dayjs";

describe("ChatMessage", () => {
  it("should render", () => {
    const date = new Date().toISOString();

    render(
      <MemoryRouter initialEntries={[APP_ROUTES.chat]}>
        <ChatMessage message="Hello" date={date} />
      </MemoryRouter>,
    );

    expect(screen.getByText("Hello")).toBeInTheDocument();
    expect(
      screen.getByText(dayjs(date).format("DD/MM/YYYY HH:mm")),
    ).toBeInTheDocument();
  });
});
