import React from 'react';
import TaskList from './TaskList';
import { Wrapper, Form, Label, TodoInput, Button } from '../style.js';

const App = ({ store, addTask, deleteTask }) => {
  const handleClick = (e, input) => {
    e.preventDefault();
    input.value.trim() && addTask(input.value);
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
      <TaskList store={store} deleteTask={deleteTask} />
    </Wrapper>
  );
};

export default App;
