import React, { useState } from 'react';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [calculations, setCalculations] = useState({
    total: null,
    operation: null,
    next: null,
  });

  const handleOperator = (e) => {
    const result = calculate(calculations, e.target.name);
    setCalculations({ ...calculations, ...result });
  };

  return (
    <div className="container">
      <div className="calculator">
        <div className="input">
          {calculations.total}
          {calculations.operation}
          {calculations.next}
        </div>
        <div className="buttons">
          <button type="button" id="clear" name="AC" onClick={handleOperator}>
            AC
          </button>
          <button type="button" name="+/-" onClick={handleOperator}>
            +/-
          </button>
          <button type="button" name="%" onClick={handleOperator}>
            %
          </button>
          <button type="button" name="÷" onClick={handleOperator}>
            ÷
          </button>
          <button type="button" name="7" onClick={handleOperator}>
            7
          </button>
          <button type="button" name="8" onClick={handleOperator}>
            8
          </button>
          <button type="button" name="9" onClick={handleOperator}>
            9
          </button>
          <button type="button" name="x" onClick={handleOperator}>
            x
          </button>
          <button type="button" name="4" onClick={handleOperator}>
            4
          </button>
          <button type="button" name="5" onClick={handleOperator}>
            5
          </button>
          <button type="button" name="6" onClick={handleOperator}>
            6
          </button>
          <button type="button" name="-" onClick={handleOperator}>
            -
          </button>
          <button type="button" name="1" onClick={handleOperator}>
            1
          </button>
          <button type="button" name="2" onClick={handleOperator}>
            2
          </button>
          <button type="button" name="3" onClick={handleOperator}>
            3
          </button>
          <button type="button" name="+" onClick={handleOperator}>
            +
          </button>
          <button
            className="zero"
            name="0"
            onClick={handleOperator}
            type="button"
          >
            0
          </button>
          <button type="button" name="." onClick={handleOperator}>
            &bull;
          </button>
          <button type="button" name="=" onClick={handleOperator}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}
