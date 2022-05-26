import React from 'react';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: {
        total: null,
        next: null,
        operation: null,
      },
      buttonName: null,
    };
    this.handleNumber = this.handleNumber.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.handleCalculate = this.handleCalculate.bind(this);
  }

  componentDidUpdate() {
    // Typical usage (don't forget to compare props):
    // calculate()
    const result = calculate(this.state.obj, this.state.buttonName);
    this.setState({
      obj: {
        total: result.total,
        next: result.next,
        operation: result.operation,
      },
    });
  }

  handleNumber(event) {
    if (this.state.obj.operation) {
      this.setState((state) => ({
        obj: {
          ...state.obj,
          next: `${state.obj.next || ''}${event.target.name}`,
        },
        buttonName: event.target.name,
      }));
    } else {
      this.setState((state) => ({
        obj: {
          ...state.obj,
          total: `${state.obj.total || ''}${event.target.name}`,
        },
        buttonName: event.target.name,
      }));
    }
  }

  handleOperator(event) {
    this.setState((state) => ({
      obj: { ...state.obj, operation: event.target.name },
      buttonName: event.target.name,
    }));
  }

  handleCalculate(event) {
    this.setState({
      buttonName: event.target.name,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="calculator">
          <div className="input">
            {this.state.obj.next}
            {this.state.obj.operation}
            {this.state.obj.total}
          </div>
          <div className="buttons">
            <button
              type="button"
              id="clear"
              name="AC"
              onClick={this.handleOperator}
            >
              AC
            </button>
            <button type="button" name="+/-" onClick={this.handleOperator}>
              +/-
            </button>
            <button type="button" name="%" onClick={this.handleOperator}>
              %
            </button>
            <button type="button" name="/" onClick={this.handleOperator}>
              &divide;
            </button>
            <button type="button" name="7" onClick={this.handleNumber}>
              7
            </button>
            <button type="button" name="8" onClick={this.handleNumber}>
              8
            </button>
            <button type="button" name="9" onClick={this.handleNumber}>
              9
            </button>
            <button type="button" name="x" onClick={this.handleOperator}>
              x
            </button>
            <button type="button" name="4" onClick={this.handleNumber}>
              4
            </button>
            <button type="button" name="5" onClick={this.handleNumber}>
              5
            </button>
            <button type="button" name="6" onClick={this.handleNumber}>
              6
            </button>
            <button type="button" name="-" onClick={this.handleOperator}>
              -
            </button>
            <button type="button" name="1" onClick={this.handleNumber}>
              1
            </button>
            <button type="button" name="2" onClick={this.handleNumber}>
              2
            </button>
            <button type="button" name="3" onClick={this.handleNumber}>
              3
            </button>
            <button type="button" name="+" onClick={this.handleOperator}>
              +
            </button>
            <button
              className="zero"
              name="0"
              onClick={this.handleNumber}
              type="button"
            >
              0
            </button>
            <button type="button" name="." onClick={this.handleNumber}>
              &bull;
            </button>
            <button type="button" name="=" onClick={this.handleCalculate}>
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
