import React from 'react';
import { ReactReduxContext } from 'react-redux';
import Task from './Task';
import { List, Button } from '../style.js';

const TaskList = ({ deleteTask }) => (
  <List>
    <ReactReduxContext.Consumer>
      {({ store }) =>
        store.getState().map(todo => (
          <Task key={todo.id} todo={todo} deleteTask={deleteTask}>
            <Button onClick={() => deleteTask(todo.id)}>&times;</Button>
            {todo.text}
          </Task>
        ))
      }
    </ReactReduxContext.Consumer>
  </List>
);

export default TaskList;
