import React, { Component } from "react";
import { Task, Button, List } from "../style.js";

class TaskList extends Component {
  render() {
    return (
      <List>
        {this.props.tasks.map(task => (
          <Task key={task.id}>
            <Button className="delete" onClick={event => this.props.deleteTask(task, event)}>
              &times;
            </Button>
            {task.text}
          </Task>
        ))}
      </List>
    );
  }
}

export default TaskList;
