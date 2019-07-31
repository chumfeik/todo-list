import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import App from './Components/App';
import store from './reducers';
import { addTask, deleteTask } from './actions';

const addTaskDispatch = text => store.dispatch(addTask(text));

const deleteTaskDispatch = id => store.dispatch(deleteTask(id));

const rerender = () =>
  render(
    <App
      store={store}
      addTask={addTaskDispatch}
      deleteTask={deleteTaskDispatch}
    />,
    document.getElementById('root')
  );
store.subscribe(rerender);
rerender();
