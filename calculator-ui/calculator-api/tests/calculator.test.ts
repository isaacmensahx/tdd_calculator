import { add, subtract, multiply } from "../src/calculator";

describe("Calculator Functions", () => {
  test("add(a, b) returns the sum of two numbers", () => {
    expect(add(1, 2)).toBe(3);
    expect(add(-1, 5)).toBe(4);
  });

  test("subtract(a, b) returns the difference of two numbers", () => {
    expect(subtract(5, 2)).toBe(3);
    expect(subtract(10, 20)).toBe(-10);
  });

  test("multiply(a, b) returns the product of two numbers", () => {
    expect(multiply(4, 3)).toBe(12);
    expect(multiply(-2, 4)).toBe(-8);
  });
});
