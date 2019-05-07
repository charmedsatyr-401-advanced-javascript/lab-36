import React, { Component } from 'react';

import { CounterContext } from './counter-provider';
const Count = props => <h1>{props.count}</h1>;
const Decrementer = props => <button onClick={props.decrement}>-</button>;
const Incrementer = props => <button onClick={props.increment}>+</button>;

export default class Counter extends Component {
  static contextType = CounterContext;
  render() {
    const { context } = this;
    return (
      <>
        <Count count={context.count} />
        <Decrementer decrement={context.decrement} />
        <Incrementer increment={context.increment} />
      </>
    );
  }
}
