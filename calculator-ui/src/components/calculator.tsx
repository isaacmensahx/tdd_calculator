import { useState } from "react";

export default function Calculator() {
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);
  const [op, setOp] = useState<string>("+");

  const calculate = () => {
    switch (op) {
      case "+": return a + b;
      case "-": return a - b;
      case "*": return a * b;
      default:  return 0;
    }
  };

  return (
    <div>
      <label>
        A
        {" "}
        <input
          aria-label="A"
          type="number"
          onChange={(e) => setA(Number(e.target.value))}
        />
      </label>

      <label>
        B
        {" "}
        <input
          aria-label="B"
          type="number"
          onChange={(e) => setB(Number(e.target.value))}
        />
      </label>

      <label>
        Operator
        {" "}
        <select aria-label="Operator" onChange={(e) => setOp(e.target.value)}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
        </select>
      </label>

      <p data-testid="result">{calculate()}</p>
    </div>
  );
}
