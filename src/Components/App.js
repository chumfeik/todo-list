import React, { Component } from "react";
import TaskList from "./TaskList";
import { Wrapper, Form, Label, TodoInput, Button } from "../style.js";

class App extends Component {
  state = { tasks: [], text: "" };

  handleChange = event => {
    this.setState({ text: event.target.value });
  };

  addTaks = event => {
    event.preventDefault();
    if (this.state.text.trim() == "") {
      this.setState({ text: "" });
      return;
    }
    const newTask = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(
      prevState => ({
        tasks: prevState.tasks.concat(newTask),
        text: ""
      }),
      () => {
        this.updateLocalStorage();
      }
    );
  };

  deleteTask = id => {
    this.setState(
      prevState => ({
        tasks: prevState.tasks.filter(task => task !== id)
      }),
      () => {
        this.updateLocalStorage();
      }
    );
  };

  updateLocalStorage() {
    localStorage.setItem("localTasks", JSON.stringify(this.state.tasks));
  }

  componentDidMount() {
    const localTasks = JSON.parse(localStorage.getItem("localTasks"));

    this.setState({
      tasks: localTasks || []
    });
  }

  render() {
    return (
      <Wrapper>
        <Form onSubmit={this.addTaks}>
          <Label>TODO</Label>
          <TodoInput
            onChange={this.handleChange}
            value={this.state.text}
            autoFocus
          />
          <Button className="add">+</Button>
        </Form>
        <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask} />
      </Wrapper>
    );
  }
}

export default App;
