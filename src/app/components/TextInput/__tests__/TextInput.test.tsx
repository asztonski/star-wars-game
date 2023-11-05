import { render, screen } from "@testing-library/react";
import { TextInput } from "../TextInput";

describe("TextInput Component", () => {
  it("should have an input element", () => {
    render(<TextInput placeHolder="" id="" setIsPlayerSet={() => ({})} />)

    const textInput = screen.getByTestId('text-input')

    expect(textInput).toBeInTheDocument()
  });
});
