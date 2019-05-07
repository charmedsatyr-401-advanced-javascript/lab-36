import React from 'react';

import CounterProvider, { CounterContext } from './counter-provider';

const Count = props => <h1>{props.count}</h1>;
const Decrementer = props => <button onClick={props.decrement}>-</button>;
const Incrementer = props => <button onClick={props.increment}>+</button>;

const Counter = () => (
  <CounterProvider>
    <CounterContext.Consumer>
      {context => (
        <>
          <Count count={context.count} />
          <Decrementer decrement={context.decrement} />
          <Incrementer increment={context.increment} />
        </>
      )}
    </CounterContext.Consumer>
  </CounterProvider>
);

export default Counter;
