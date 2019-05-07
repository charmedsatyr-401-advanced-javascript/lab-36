import React from 'react';

import { ToDoContext } from './todo-provider';
import { When } from '../if';
import Form from './form';

const Item = props => (
  <>
    <ToDoContext.Consumer>
      {context => (
        <li className={`complete-${props.item.complete.toString()}`}>
          <span onClick={() => context.toggleComplete(props.item.id)}>{props.item.text}</span>
          <button onClick={() => context.toggleEdit(props.item.id)}>edit</button>
          <When condition={context.editing === props.item.id}>
            <Form />
          </When>
        </li>
      )}
    </ToDoContext.Consumer>
  </>
);

export default Item;
