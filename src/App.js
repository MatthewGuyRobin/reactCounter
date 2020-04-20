import React, {Component} from 'react';
import './App.css';

class App extends Component {

  state = {
    count: 0,
  }

  incrementHandler = () => {
    let count = this.state.count + 1
    this.setState({ count })
  }

  decrementHandler = () => {
    let count = this.state.count - 1
    this.setState({ count })
  }

  render() {
    return (
      <div>

        <button onClick={this.incrementHandler}>Plus +</button>

        <button onClick={this.decrementHandler}>Minus -</button>

        <h1>Current count:{this.state.count}</h1>

      </div>
    )
  }
}

export default App;
