import React from 'react';
import Task from './Task';
import { List } from '../style.js';

const TaskList = ({ store, deleteTask }) => (
  <List>
    {store.getState().map(todo => (
      <Task key={todo.id} todo={todo} deleteTask={deleteTask} />
    ))}
  </List>
);

export default TaskList;
