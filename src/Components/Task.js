import React, { useContext } from 'react';
import { Context } from '../index';
import { Task as ListItem, Button } from '../style.js';

const Task = ({ todo }) => {
  const state = useContext(Context);

  return (
    <ListItem>
      <Button onClick={() => state.deleteTask(todo.id)}>&times;</Button>
      {todo.text}
    </ListItem>
  );
};

export default Task;
