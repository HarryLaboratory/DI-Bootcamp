import React, { Component } from 'react';
import './Exercise.css';

class Exercise3 extends Component {
  render() {
    const style_header = {
      color: 'white',
      backgroundColor: 'DodgerBlue',
      padding: '10px',
      fontFamily: 'Arial',
    };

    return (
      <div>
        <h1 style={style_header}>This is a styled Header</h1>
        <p className="para">This is a paragraph with a custom background.</p>
        <a href="https://www.example.com">Visit Example Website</a>
        <form>
          <input type="text" placeholder="Enter text" />
          <button type="submit">Submit</button>
        </form>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQio6ntjqpYtZgetz0ldy1Xd5_PSqmj-L3qwg&s" alt="Placeholder" />
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    );
  }
}

export default Exercise3;
