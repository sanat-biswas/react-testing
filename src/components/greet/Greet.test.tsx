import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet", () => {
  test("render correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  describe("Greet", () => {
    test("renders a name", () => {
      render(<Greet name="Sanat" />);
      const textElement = screen.getByText("Hello Sanat");
      expect(textElement).toBeInTheDocument();
    });
  });
});
