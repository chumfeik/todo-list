import React from 'react';
import { useDispatch } from 'react-redux';
import TaskList from './TaskList';
import { addTask } from '../actions';
import { Wrapper, Form, Label, TodoInput, Button } from '../style.js';

const App = () => {
  const dispatch = useDispatch();

  const handleClick = (e, input) => {
    e.preventDefault();
    input.value.trim() && dispatch(addTask(input.value));
    input.value = '';
    input.focus();
  };

  let input;
  return (
    <Wrapper>
      <Form onSubmit={e => handleClick(e, input)}>
        <Label>TODO</Label>
        <TodoInput innerRef={node => (input = node)} autoFocus />
        <Button>+</Button>
      </Form>
      <TaskList />
    </Wrapper>
  );
};

export default App;
