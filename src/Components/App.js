import React, { Component } from "react";
import TaskList from "./TaskList";
import { Wrapper, Title, TaskName, Button } from "../style.js";

class App extends Component {
  state = { tasks: [], text: "" };

  handleChange = event => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newTask = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(prevState => ({
      tasks: prevState.tasks.concat(newTask),
      text: ""
    }));
  };

  deleteTask = id => {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(task => task !== id)
    }));
  };

  render() {
    return (
      <Wrapper>
        <Title>TODO</Title>
        <form onSubmit={this.handleSubmit}>
          <TaskName
            onChange={this.handleChange}
            value={this.state.text}
            autoFocus
          />
          <Button className="add">+</Button>
        </form>
        <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask} />
      </Wrapper>
    );
  }
}

export default App;
