import React, { Component } from 'react';
import Counter from './counter';

import ToDo from './components/todo/todo.js';

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
