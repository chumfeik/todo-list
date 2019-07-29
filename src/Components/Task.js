import React from 'react';
import { Task as ListItem, Button } from '../style.js';

const Task = ({ todo, deleteTask }) => (
  <ListItem>
    <Button onClick={() => deleteTask(todo.id)}>&times;</Button>
    {todo.text}
  </ListItem>
);

export default Task;
