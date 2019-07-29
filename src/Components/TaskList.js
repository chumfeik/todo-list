import React, { Component } from 'react';
import { ReactReduxContext } from 'react-redux';
import Task from './Task';
import { List, Button } from '../style.js';

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.deleteTask = this.props.deleteTask;
  }

  render() {
    return (
      <List>
        <ReactReduxContext.Consumer>
          {({ store }) =>
            store.getState().map(todo => (
              <Task key={todo.id} todo={todo} deleteTask={this.deleteTask}>
                <Button onClick={() => this.deleteTask(todo.id)}>
                  &times;
                </Button>
                {todo.text}
              </Task>
            ))
          }
        </ReactReduxContext.Consumer>
      </List>
    );
  }
}

export default TaskList;
