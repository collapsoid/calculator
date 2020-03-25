import React from 'react';

import Display from './display/display';
import Numpad from './numpad/numpad';

import './app.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {input: ''};

    this.handleInput = this.handleInput.bind(this);
    this.handleResult = this.handleResult.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleInput(val) {
    this.setState({
      input: this.state.input === 'ERROR' ? val : this.state.input + val
    });
  };

  handleResult() {
    const ops = ['+', '-', '*', '÷'];

    const input = this.state.input;
    const expression = [];

    let current = '';

    // Parse input string and convert it to final expression
    for (let i = 0; i < input.length; i++) {

      if (ops.indexOf(input[i]) !== -1) {
        expression.push(current);

        if (input[i] === '÷') {
          expression.push('/');
        } else {
          expression.push(input[i]);
        }

        current = '';
      } else if (input[i] === '%') {
        current = +current / 100 * eval(expression.slice(0, -1).join(''));
        expression.push(Math.abs(current));

        current = '';
      } else {
        current += input[i];
      }
    }

    try {
      this.setState({
        input: eval(expression.join('') + current)
      });
    } catch {
      this.setState({
        input: 'ERROR'
      });
    }
  }

  handleDelete(all) {
    if (all) {
      this.setState({
        input: ''
      });
    } else {
      this.setState({
        input: this.state.input.slice(0, -1)
      });
    }
  }

  componentDidMount() {
    const buttons = document.body.querySelector('.calculator__numpad').querySelectorAll('.button');

    document.addEventListener('keydown', (e) => {
      e.preventDefault();

      let desiredButton = null;

      for (let button of buttons) {
        if (button.id === e.key) {
          desiredButton = button;
        }

        if (button.id === 'C' && e.key === 'Delete') {
          desiredButton = button;
        }

        if (button.id === '←' && e.key === 'Backspace') {
          desiredButton = button;
        }

        if (button.id === '=' && e.key === 'Enter') {
          desiredButton = button;
        }

        if (desiredButton) {
          break;
        }
      }

      return desiredButton ? desiredButton.click() : undefined;
    });
  }

  render() {
    return (
      <div className="calculator">
        <Display result={this.state.input} />
        <Numpad handleInput={this.handleInput} handleResult={this.handleResult} handleDelete={this.handleDelete} />
      </div>
    );
  }
}