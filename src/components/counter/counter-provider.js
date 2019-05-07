import React, { Component } from 'react';

export const CounterContext = React.createContext();

class CounterProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      decrement: this.decrement.bind(this),
      increment: this.increment.bind(this),
    };
  }
  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  decrement() {
    this.setState({ count: this.state.count - 1 });
  }
  render() {
    return (
      <CounterContext.Provider value={this.state}>{this.props.children}</CounterContext.Provider>
    );
  }
}

export default CounterProvider;
