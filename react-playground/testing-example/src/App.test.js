import { render, screen } from '@testing-library/react';
import App from './App';
import React from "react";
import userEvent from "@testing-library/user-event";

describe("App component", () => {
  it("renders heading inital", () => {
    const { container } = render(<App/>);
    expect(container).toMatchSnapshot();
  })

  it("renders heading after click", () => {
    render(<App/>);
    const button = screen.getByRole("button", {name: "Click me"});

    userEvent.click(button);

    expect(screen.getByRole("heading").textContent).toMatch(/clicked/);
  })
})
