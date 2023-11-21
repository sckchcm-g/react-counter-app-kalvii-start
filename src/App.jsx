import React from 'react';
// import './App.css'


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count+1 });
  };

  decrement = () => {
    if(this.state.count>0) {
      this.setState({ count: this.state.count-1 })
    }
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div>
        <div id='counter'>Counter App</div>
        <div id='variable'>{this.state.count}</div>
        <div className='flex btns'>
          <button id='plus' onClick={this.increment}>+</button>
          <button id='minus' onClick={this.decrement}>-</button>
          <button id='reseter' onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}
