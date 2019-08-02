import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';
import { List } from '../style.js';

const TaskList = () => {
  const todos = useSelector(state => state);

  return (
    <List>
      {todos.map(todo => (
        <Task key={todo.id} todo={todo} />
      ))}
    </List>
  );
};

export default TaskList;
