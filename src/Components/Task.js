import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../actions';
import { Task as ListItem, Button } from '../style.js';

const Task = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <ListItem>
      <Button onClick={() => dispatch(deleteTask(todo.id))}>&times;</Button>
      {todo.text}
    </ListItem>
  );
};

export default Task;
