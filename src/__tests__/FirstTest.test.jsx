import { render, screen } from "@testing-library/react";
import FirstTest from "../components/FirstTest";

test("First test render successfully", () => {
  render(<FirstTest />);

  const element = screen.getByText(/first test/i);
  expect(element).toBeInTheDocument();
});
