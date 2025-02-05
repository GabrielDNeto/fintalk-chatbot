import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

import Banner from ".";
import { APP_ROUTES } from "../../config/routes";

describe("Banner component", () => {
  it("Should render main text", () => {
    render(
      <MemoryRouter initialEntries={[APP_ROUTES.home]}>
        <Banner />
      </MemoryRouter>,
    );
    expect(screen.getByText("Nº 1 em IA Conversacional")).toBeInTheDocument();
  });

  it("should render the subheading", () => {
    expect(
      screen.getByText("Em um mundo de IA, ser lento não é uma opção."),
    ).toBeInTheDocument();
  });

  it("should render the link to chat and check href source", () => {
    const btnLink = screen.getByRole("link", { name: "Falar com Chatbot" });

    expect(btnLink).toBeInTheDocument();

    expect(btnLink).toHaveAttribute("href", APP_ROUTES.chat);
  });

  it("should render the image", () => {
    expect(
      screen.getByAltText("happy women using mobile and card"),
    ).toBeInTheDocument();
  });
});
