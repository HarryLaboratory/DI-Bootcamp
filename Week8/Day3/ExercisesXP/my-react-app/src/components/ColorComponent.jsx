import React, { Component } from 'react';

class ColorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: 'red' };
  }

  shouldComponentUpdate(nextProps, nextState) {
    // To Prevent re-rendering if the color is blue
    if (nextState.favoriteColor === 'blue') {
      return false;
    }
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('after update');
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('in getSnapshotBeforeUpdate');
    return null;
  }

  changeColor = () => {
    this.setState({ favoriteColor: 'yellow' });
  };

  render() {
    return (
      <div>
        <h1>Favorite Color: {this.state.favoriteColor}</h1>
        <button onClick={this.changeColor}>Change Color</button>
      </div>
    );
  }
}

export default ColorComponent;
