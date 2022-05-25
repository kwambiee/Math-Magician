import React from 'react';
import calculate from '../logic/calculate';
import operate from '../logic/operate';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.mathOperations = this.mathOperations.bind(this);
  }

  handleClick(event) {
    this.setState((state) => ({
      input: `${state.input}${event.target.name}`,
    }));
  }

  mathOperations() {
    if (this.state.input) {
      const inputValue = this.state.input;
    }
  }

  render() {
    return (
      <div className="container">
        <div className="calculator">
          <form>
            <input type="text" value={this.state.input} />
          </form>
          <div className="buttons">
            <button type="button" id="clear" onClick={this.handleClick}>
              AC
            </button>
            <button type="button" onClick={this.handleClick}>
              +/-
            </button>
            <button type="button" name="%" onClick={this.handleClick}>
              %
            </button>
            <button type="button" name="/" onClick={this.handleClick}>
              &divide;
            </button>
            <button type="button" name="7" onClick={this.handleClick}>
              7
            </button>
            <button type="button" name="8" onClick={this.handleClick}>
              8
            </button>
            <button type="button" name="9" onClick={this.handleClick}>
              9
            </button>
            <button type="button" name="x" onClick={this.handleClick}>
              x
            </button>
            <button type="button" name="4" onClick={this.handleClick}>
              4
            </button>
            <button type="button" name="5" onClick={this.handleClick}>
              5
            </button>
            <button type="button" name="6" onClick={this.handleClick}>
              6
            </button>
            <button type="button" name="-" onClick={this.handleClick}>
              -
            </button>
            <button type="button" name="1" onClick={this.handleClick}>
              1
            </button>
            <button type="button" name="2" onClick={this.handleClick}>
              2
            </button>
            <button type="button" name="3" onClick={this.handleClick}>
              3
            </button>
            <button type="button" name="+" onClick={this.handleClick}>
              +
            </button>
            <button
              className="zero"
              name="0"
              onClick={this.handleClick}
              type="button"
            >
              0
            </button>
            <button type="button" name="." onClick={this.mathOperations}>
              &bull;
            </button>
            <button type="button" name="=" onClick={this.handleClick}>
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
