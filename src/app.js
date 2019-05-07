import React, { Component } from 'react';

import Counter from './components/counter';
import ToDo from './components/todo';

export default class App extends Component {
  render() {
    return (
      <>
        <Counter />
        <ToDo />
      </>
    );
  }
}
