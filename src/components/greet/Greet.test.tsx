import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

test("Greet renders successfully", () => {
  render(<Greet />);
  const text = screen.getByText(/hello/i);
  expect(text).toBeInTheDocument();
});

test.skip("Greet renders with a name", () => {
  render(<Greet name="Mahesh" />);

  const textElement = screen.getByText(/hello mahesh/i);
  expect(textElement).toBeInTheDocument();
});
