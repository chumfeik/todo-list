import React, { useContext } from 'react';
import Task from './Task';
import { Context } from '../index';
import { List } from '../style.js';

const TaskList = () => {
  const state = useContext(Context);

  return (
    <List>
      {state.store.getState().map(todo => (
        <Task key={todo.id} todo={todo} />
      ))}
    </List>
  );
};

export default TaskList;
