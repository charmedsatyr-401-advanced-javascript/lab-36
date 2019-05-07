import React from 'react';

import ToDoProvider from './todo-provider';

import Count from './count';
import AddToDo from './add-todo';
import List from './list';

import './todo.scss';

const ToDo = () => (
  <ToDoProvider>
    <section className="todo">
      <Count />
      <AddToDo />
      <List />
    </section>
  </ToDoProvider>
);

export default ToDo;
