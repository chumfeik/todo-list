import React, { Component } from 'react';
import { Task as ListItem, Button } from '../style.js';

class Task extends Component {
  constructor(props) {
    super(props);
    this.deleteTask = this.props.deleteTask;
    this.todo = this.props.todo;
  }

  render() {
    return (
      <ListItem>
        <Button onClick={() => this.deleteTask(this.todo.id)}>&times;</Button>
        {this.todo.text}
      </ListItem>
    );
  }
}

export default Task;
