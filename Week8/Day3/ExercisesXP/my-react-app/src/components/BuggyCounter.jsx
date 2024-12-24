import React, { Component } from 'react';

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };  // Initialize counter state to 0
  }

  handleClick = () => {
    this.setState((prevState) => {
      const newCounter = prevState.counter + 1;
      if (newCounter === 5) {
        throw new Error('I crashed!');  // error when counter reaches 5
      }
      return { counter: newCounter };  
    });
  };

  render() {
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default BuggyCounter;
