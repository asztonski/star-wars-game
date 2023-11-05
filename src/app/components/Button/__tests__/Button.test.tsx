import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Button } from "../Button";

describe("Button Component", () => {
  test("should has element <button> to be in the component", () => {
    render(<Button />);
    const buttonEl = screen.getByRole("button");
    expect(buttonEl).toBeInTheDocument;
  });
});

describe("Button Component", () => {
  test("should have text content", () => {
    render(<Button content="" />);
    const textEl = screen.getAllByTestId("text-element");
    expect(textEl).toBeInTheDocument;
  });
});

describe("Button Component", () => {
  test("should have an onClick event handler", () => {
    // Create a mock function to use as the onClick handler
    const onClickMock = jest.fn();

    const { getByRole } = render(<Button onClick={onClickMock} />);
    const buttonEl = screen.getByRole("button");

    // Trigger a click event on the button
    fireEvent.click(buttonEl);

    // Check if the onClick handler was called
    expect(onClickMock).toHaveBeenCalled();
  });
});
