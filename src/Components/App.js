import React, { useContext } from 'react';
import TaskList from './TaskList';
import { Context } from '../index';
import { Wrapper, Form, Label, TodoInput, Button } from '../style.js';

const App = () => {
  const state = useContext(Context);

  const handleClick = (e, input) => {
    e.preventDefault();
    input.value.trim() && state.addTask(input.value);
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
