import React, { Component } from 'react';
import TaskList from './TaskList';
import { Wrapper, Form, Label, TodoInput, Button } from '../style.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.addTask = this.props.addTask;
    this.deleteTask = this.props.deleteTask;
  }

  handleClick(e, input) {
    e.preventDefault();
    input.value.trim() && this.addTask(input.value);
    input.value = '';
  }

  render() {
    let input;
    return (
      <Wrapper>
        <Form onSubmit={e => this.handleClick(e, input)}>
          <Label>TODO</Label>
          <TodoInput innerRef={node => (input = node)} />
          <Button>+</Button>
        </Form>
        <TaskList deleteTask={this.deleteTask} />
      </Wrapper>
    );
  }
}

export default App;
