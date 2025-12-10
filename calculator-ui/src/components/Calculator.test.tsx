import { render, screen, fireEvent } from "@testing-library/react";
import Calculator from "./calculator";


test("Calculator performs addition correctly", () => {
  render(<Calculator />);

  const inputA = screen.getByLabelText("A");
  const inputB = screen.getByLabelText("B");
  const operator = screen.getByLabelText("Operator");
  const result = screen.getByTestId("result");

  fireEvent.change(inputA, { target: { value: "3" } });
  fireEvent.change(inputB, { target: { value: "2" } });
  fireEvent.change(operator, { target: { value: "+" } });

  expect(result.textContent).toBe("5");
});
