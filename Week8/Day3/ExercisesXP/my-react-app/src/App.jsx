import React, { Component } from 'react';
import BuggyCounter from './components/BuggyCounter';
import ErrorBoundary from './components/ErrorBoundary';
import ColorComponent from './components/ColorComponent';
import './App.css'; 


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true };  // State for managing Child component visibility
  }

  // To hide Child component
  deleteChild = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <h1>Simulation 1: One ErrorBoundary for Two BuggyCounters</h1>
        <ErrorBoundary>
          <BuggyCounter />
          <BuggyCounter />
        </ErrorBoundary>

        <h1>Simulation 2: Separate ErrorBoundaries for each BuggyCounter</h1>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>

        <h1>Simulation 3: No ErrorBoundary</h1>
        <BuggyCounter />

        <h1>Lifecycle Methods Example</h1>
        <ColorComponent />

        <h1>Unmounting Phase Example</h1>
        <button onClick={this.deleteChild}>Delete Child Component</button>
        {this.state.show && <Child />}
      </div>
    );
  }
}

// Child component that demonstrate unmounting phase
class Child extends Component {
  componentWillUnmount() {
    alert('Child component will be unmounted');
  }

  render() {
    return <h2>Hello World!</h2>;
  }
}

export default App;
