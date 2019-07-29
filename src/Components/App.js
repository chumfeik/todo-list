import React from 'react';
import TaskList from './TaskList';
import { Wrapper, Form, Label, TodoInput, Button } from '../style.js';

const App = ({ addTask, deleteTask }) => {
  const handleClick = (e, input) => {
    e.preventDefault();
    input.value.trim() && addTask(input.value);
    input.value = '';
  };

  let input;
  return (
    <Wrapper>
      <Form onSubmit={e => handleClick(e, input)}>
        <Label>TODO</Label>
        <TodoInput innerRef={node => (input = node)} />
        <Button>+</Button>
      </Form>
      <TaskList deleteTask={deleteTask} />
    </Wrapper>
  );
};

export default App;
