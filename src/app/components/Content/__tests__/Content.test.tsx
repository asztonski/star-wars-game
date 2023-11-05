import React from "react";
import { render, screen } from "@testing-library/react";
import { Content } from "../Content";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: () => ({ stage: "game mode" }),
}));

describe("Content Component", () => {
  test("should not be empty", () => {
    render(<Content />);
    
    const selectModeComponent = screen.queryByTestId("wrapper-component");
    expect(selectModeComponent).toBeInTheDocument();
  });

  test("should have a getContent function based on stage value", () => {
    const getContent = Content().type;
    expect(getContent).toBeDefined();
  });
});
