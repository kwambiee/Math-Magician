import React from 'react';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: null, next: null, operation: null };
    this.handleOperator = this.handleOperator.bind(this);
  }
  render() {
    const object = this.state;
    return (
      <div className="container">
        <div className="calculator">
          <div className="input">
            {object.total}
            {object.operation}
            {object.next}
          </div>
          <div className="buttons">
            <button
              type="button"
              id="clear"
              name="AC"
              onClick={() => this.handleOperator('AC')}
            >
              AC
            </button>
            <button
              type="button"
              name="+/-"
              onClick={() => this.handleOperator('+/-')}
            >
              +/-
            </button>
            <button
              type="button"
              name="%"
              onClick={() => this.handleOperator('%')}
            >
              %
            </button>
            <button
              type="button"
              name="÷"
              onClick={() => this.handleOperator('÷')}
            >
              ÷
            </button>
            <button
              type="button"
              name="7"
              onClick={() => this.handleOperator('7')}
            >
              7
            </button>
            <button
              type="button"
              name="8"
              onClick={() => this.handleOperator('8')}
            >
              8
            </button>
            <button
              type="button"
              name="9"
              onClick={() => this.handleOperator('9')}
            >
              9
            </button>
            <button
              type="button"
              name="x"
              onClick={() => this.handleOperator('x')}
            >
              x
            </button>
            <button
              type="button"
              name="4"
              onClick={() => this.handleOperator('4')}
            >
              4
            </button>
            <button
              type="button"
              name="5"
              onClick={() => this.handleOperator('5')}
            >
              5
            </button>
            <button
              type="button"
              name="6"
              onClick={() => this.handleOperator('6')}
            >
              6
            </button>
            <button
              type="button"
              name="-"
              onClick={() => this.handleOperator('-')}
            >
              -
            </button>
            <button
              type="button"
              name="1"
              onClick={() => this.handleOperator('1')}
            >
              1
            </button>
            <button
              type="button"
              name="2"
              onClick={() => this.handleOperator('2')}
            >
              2
            </button>
            <button
              type="button"
              name="3"
              onClick={() => this.handleOperator('3')}
            >
              3
            </button>
            <button
              type="button"
              name="+"
              onClick={() => this.handleOperator('+')}
            >
              +
            </button>
            <button
              className="zero"
              name="0"
              onClick={() => this.handleOperator('0')}
              type="button"
            >
              0
            </button>
            <button
              type="button"
              name="."
              onClick={() => this.handleOperator('.')}
            >
              &bull;
            </button>
            <button
              type="button"
              name="="
              onClick={() => this.handleOperator('=')}
            >
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
