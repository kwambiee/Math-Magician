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
  }

  handleClick(event) {
    this.setState({
      input: event.target.name,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="calculator">
          <form>
            <input type="text" value={this.state.input} />
          </form>
          <div className="buttons">
            <button type="button" onClick={handleClick}>
              AC
            </button>
            <button type="button" onClick={handleClick}>
              +/-
            </button>
            <button type="button" onClick={handleClick}>
              %
            </button>
            <button type="button" onClick={handleClick}>
              &divide;
            </button>
            <button type="button" onClick={handleClick}>
              7
            </button>
            <button type="button" onClick={handleClick}>
              8
            </button>
            <button type="button" onClick={handleClick}>
              9
            </button>
            <button type="button" onClick={handleClick}>
              x
            </button>
            <button type="button" onClick={handleClick}>
              4
            </button>
            <button type="button" onClick={handleClick}>
              5
            </button>
            <button type="button" onClick={handleClick}>
              6
            </button>
            <button type="button" onClick={handleClick}>
              -
            </button>
            <button type="button" onClick={handleClick}>
              1
            </button>
            <button type="button" onClick={handleClick}>
              2
            </button>
            <button type="button" onClick={handleClick}>
              3
            </button>
            <button type="button" onClick={handleClick}>
              +
            </button>
            <button className="zero" onClick={handleClick} type="button">
              0
            </button>
            <button type="button" onClick={handleClick}>
              &bull;
            </button>
            <button type="button" onClick={handleClick}>
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
