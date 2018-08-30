import React, { Component } from "react";
import { Task, Button, List } from "../style.js";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class TaskList extends Component {
  render() {
    return (
      <List>
        <ReactCSSTransitionGroup
          transitionName="task"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {this.props.tasks.map(task => (
            <Task key={task.id}>
              <Button
                className="delete"
                onClick={event => this.props.deleteTask(task, event)}
              >
                &times;
              </Button>
              {task.text}
            </Task>
          ))}
        </ReactCSSTransitionGroup>
      </List>
    );
  }
}

export default TaskList;
