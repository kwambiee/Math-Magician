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
    return (
      <div className="container">
        <div className="calculator">
          <form>
            <input type="text" placeholder="0" />
          </form>
          <div className="buttons">
            <button type="button">AC</button>
            <button type="button">+/-</button>
            <button type="button">%</button>
            <button type="button">&divide;</button>
            <button type="button">7</button>
            <button type="button">8</button>
            <button type="button">9</button>
            <button type="button">x</button>
            <button type="button">4</button>
            <button type="button">5</button>
            <button type="button">6</button>
            <button type="button">-</button>
            <button type="button">1</button>
            <button type="button">2</button>
            <button type="button">3</button>
            <button type="button">+</button>
            <button className="zero" type="button">
              0
            </button>
            <button type="button">&bull;</button>
            <button type="button">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
